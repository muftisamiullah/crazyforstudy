/************************* code written by Sami Ullah *************************/
import Header from "../../../components/website/home/header";
import Navbar from "../../../components/website/home/navbar";
import Footer from "../../../components/website/home/footer";
import Follow from "../../../components/website/home/follow";
import Faq from "../../../components/website/book-detail/faq";
import RelatedTbs from "../../../components/website/book-detail/related-tbs";
import Subscription from "../../../components/website/book-detail/subscription";
import Description from "../../../components/website/book-detail/description";
import Details from "../../../components/website/book-detail/detail";
import Reviews from "../../../components/website/book-detail/review";
import BreadCrumb from "../../../components/website/textbook-solutions-manuals/tbs-breadcrumb";
import { useParams, useHistory, useLocation, Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import {
  getBook,
  getChapters,
  getSections,
  getExercises,
  getRelatedBooks,
  getProblems,
  getProblemsDirectly,
  searchQuestions,
  askForSoltuion,
  askForBook,
} from "../../../libs/book";
import { useState, useEffect, useContext } from "react";
import BookInfo from "../../../components/website/book-detail/book-info";
import Highlighter from "react-highlight-words";
import {
  replaceAll,
  MakeSlug,
  capitalize,
  MakeSlug2,
} from "../../../components/common/make-slug";
// import {Helmet} from 'react-helmet-async'
import Subject from "./subject";
import Seo from "../../../components/common/seo";
import { AuthContext } from "../../../context/AuthContext";
import Marquee from "../../../components/common/marquee";
import Answer from "../../../components/website/textbook-solutions-manuals/Answer";
import { getNavbarData, getSubContent } from "../../../libs/home";

export default function Book() {
  const { state, menus, subContent,
    dispatchSubContent,
    dispatchSelCon } = useContext(AuthContext);
  const session = state.isLoggedIn;
  //changed the name of the file from [book].js to index.js and moved to textbook-solutions-manual
  //and passed variable ISBN13 to all the react useQuery instead of params.book dated 29 april
  //previous code could be found on github under Rohit Sharmas repo.
 
    
    // const [ updatedEdition, setUpdatedEdition ] = useState('')

  

  const queryClient = useQueryClient();
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  // const regex = /\d+/g; //for retriveing both numbers isbn13 and isbn10 from the url
  const regex = /\d{13}/g; //for retriveing just the isbn 13 digit
  //regex for checking if the url contains chapter no then that chapter is selected in the dropdown
  // const chapterRegex =  /(?:chapter-)([a-z0-9]+)/;
  //regex was changed becz the baove regex didnt fetch decimal chapter nos, it only fetched 1 to 9 and not 2.1
  const chapterRegex = /(?:chapter-)([0-9]+(\.[0-9][0-9]?)?)/;
  //regex for checking if the url contains question no then that question is selected in the dropdown
  const problemRegex = /(?:problem-)([a-z0-9]+)/; //if u want to match the underscore also /[^\w]|_/g

  //commented bcz moved book inside subject so as to match the url
  // const data = params.book != undefined ? params.book.match(regex) : params.book;
  const data =
    params.subject != undefined ? params.subject.match(regex) : params.subject;
  const ISBN13 = data ? data[0] : null;
  // console.log('ISBN13',data,ISBN13,params.subject)
  const [question, setQuestion] = useState();
  const [chapter, setChapter] = useState();
  const [chapterName, setChapterName] = useState();
  const [section, setSection] = useState();
  const [exercise, setExercise] = useState();
  const [relatedBook, setRelatedBook] = useState();
  const [directProblem, setDirectProblem] = useState(false);
  const [search, setSearch] = useState();
  const [display, setDisplay] = useState();
  const [colMd6, setColMd6] = useState();
  const [searchedItems, setSearchedItems] = useState();
  const [selectedQuestion, setselectedQuestion] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [answer, setAnswer] = useState();
  const [source, setSource] = useState();
  const [answerObject, setAnswerObject] = useState({});
  const [answerRequested, setAnswerRequested] = useState();
  const [loc, setLoc] = useState();

  //seo
  const [seo, setSeo] = useState(false);
  const [similarBooks, setSimilarBooks] = useState(false);
  const [answerFetched, setAnswerFetched] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [keywords, setKeywords] = useState();
  const [altText, setAlttext] = useState();
  const [robots, setRobots] = useState("index, follow");

  //schema
  const [breadcrumbSchema, setBreadcrumbSchema] = useState(null);
  const [reviewSchema, setReviewSchema] = useState(null);
  const [faqSchema, setFaqSchema] = useState(null);

  const [notificationLink, setNotificationLink] = useState(null);

  //example call commented out as a reminder
  // const { data: books, isLoading:bookIsLoading, error:bookError } = useQuery([params.book], () => getBook({book_isbn: ISBN13}),{staleTime:Infinity})
  const {
    data: books,
    isLoading: bookIsLoading,
    error: bookError,
  } = useQuery([ISBN13], () => getBook({ book_isbn: ISBN13 }), {
    staleTime: Infinity,
    enabled: !!ISBN13,
  });
  const {
    data: chapters,
    isLoading: chapterIsLoading,
    error: chapterError,
  } = useQuery(
    [`${ISBN13}-chapter`],
    () => getChapters({ book_isbn: ISBN13 }),
    { staleTime: Infinity, enabled: !!ISBN13 }
  );
  const {
    data: sections,
    isLoading: sectionIsLoading,
    error: sectionError,
  } = useQuery(
    [`${ISBN13}-${chapter}`],
    () => getSections({ book_isbn: ISBN13, chapter_no: chapter }),
    { staleTime: Infinity, enabled: !!ISBN13 }
  );
  const {
    data: exercises,
    isLoading: exerciseIsLoading,
    error: exerciseError,
  } = useQuery(
    [`${ISBN13}-${chapter}-${section}`],
    () =>
      getExercises({
        book_isbn: ISBN13,
        chapter_no: chapter,
        section_no: section,
      }),
    { staleTime: Infinity, enabled: !!ISBN13 }
  );
  const {
    data: problems,
    isLoading: problemIsLoading,
    error: problemError,
    refetch: refetchProblems,
  } = useQuery(
    [`${ISBN13}-${section}-${exercise}`],
    () =>
      getProblems(
        {
          book_isbn: ISBN13,
          chapter_no: chapter,
          section_no: section,
          exercise_no: exercise,
        },
        state.Subscribe
      ),
    { staleTime: Infinity, enabled: !!ISBN13 }
  );

  const {
    data: problemsDirect,
    isLoading: problemDirectIsLoading,
    error: problemDirectError,
    refetch: refetchProblemsDirect,
  } = useQuery(
    [`${ISBN13}-${chapter}-${directProblem}`],
    () =>
      getProblemsDirectly(
        { book_isbn: ISBN13, chapter_no: chapter },
        state.Subscribe
      ),
    { staleTime: Infinity, enabled: directProblem }
  );

  // const { data: relatedBooks, isLoading: relatedBooksIsLoading, error:relatedBooksError } = useQuery([`${relatedBook}-related-books`], () => getRelatedBooks({sub_subject: relatedBook}),{staleTime:Infinity,enabled: !!ISBN13,}) //changed to below code was getting called when relatedbook was undefined
  const {
    data: relatedBooks,
    isLoading: relatedBooksIsLoading,
    error: relatedBooksError,
  } = useQuery(
    [`${relatedBook}-related-books`],
    () => getRelatedBooks({ sub_subject: relatedBook }),
    { staleTime: Infinity, enabled: !!relatedBook }
  );

  // const { data: searchedItems, isLoading: searchIsLoading, error:searchError } = useQuery([search], () => searchQuestions({book_isbn:ISBN13,search:search}),{staleTime:Infinity})

      const loadContent = async (item) => {
          let existData = subContent[item._id];
          if (!existData && existData == undefined) {
            const data = await getSubContent(item._id);
           // localStorage.setItem("subjectId", item._id);
            dispatchSubContent({
              type: "SET_CONTENT",
              content: { [item._id]: data },
            });

            dispatchSelCon({
              type: "SET_CONTENT",
              content: data,
            });
          } else {
           // localStorage.setItem("subjectId", existData._id);
            dispatchSelCon({
              type: "SET_CONTENT",
              content: existData,
            });
          }
        };

  //   const { data:menus, isLoading } = useQuery("menus", getNavbarData, {
  //     staleTime: Infinity,
  //     cacheTime: 1000 * 60 * 60,
  //     refetchOnWindowFocus: false,
  //     refetchOnMount: false,
  //   });

  useEffect(() => {
    let subject = params.subject;
    let mdata = menus.find((r) => MakeSlug(r.subject) == subject);
    
    if(mdata){
        loadContent(mdata)
    }

    // loadContent();
  }, [params.subject, menus]);

  const handleChapter = async (e) => {
    setChapter(e.target.value);
    const chapterValue =
      e.target.options[e.target.selectedIndex].dataset.chapter;
    
    setChapterName(e.target.options[e.target.selectedIndex].dataset.chapter);
    history.push(
      `/textbook-solutions-manuals/${MakeSlug2(chapterValue)}-${MakeSlug(
        books[0].Edition
      )}-chapter-${e.target.value}-solutions-${ISBN13}`,
      undefined,
      { shallow: true }
    );
  };

  const handleSection = async (e) => {
    setSection(e.target.value);
  };

  const handleExercise = async (e) => {
    setExercise(e.target.value);
  };

  const handleQuestion = async (e) => {
    setQuestion(e.target.value);
    const questionValue =
      e.target.options[e.target.selectedIndex].dataset.question;
    setselectedQuestion(e.target.value + " " + questionValue);
    if (questionValue) {
      history.push(
        `/textbook-solutions-manuals/${MakeSlug(
          questionValue
        )}-chapter-${chapter}-problem-${MakeSlug(
          e.target.value
        )}-solutions-${ISBN13}`,
        undefined,
        { shallow: true }
      );
      setRobots("index, follow");
    } else {
      history.push(
        `/textbook-solutions-manuals/${MakeSlug(chapterName)}-${MakeSlug(
          books[0].Edition
        )}-chapter-${chapter}-problem-${MakeSlug(
          e.target.value
        )}-solutions-${ISBN13}`,
        undefined,
        { shallow: true }
      );
      setRobots("noindex, nofollow");
    }
  };

  const clickedQues = async (data, item, key) => {
    
    if (
      state.Subscribe === "true" &&
      item.answerRequestIds.some((e) => e.user_id === state._id)
    ) {
      setAnswerRequested(true);
      setAnswerFetched(false);

      //timer
      let creation_time;
      item.answerRequestIds.filter((e) => {
        if (e.user_id === state._id) {
          creation_time = e.answerRequestDate;
        }
      });
      let addedTwoHours = new Date(
        new Date(creation_time).getTime() + 4 * 60 * 60 * 1000
      ).getTime();
      let currentTime = new Date().getTime();
      let difference = ((addedTwoHours - currentTime) / 1000).toFixed(0);
      if (difference <= 0) {
        setTotalSeconds(0);
        stopTimer();
        startTimer(0);
      } else {
        setTotalSeconds(difference);
        stopTimer();
        startTimer(difference);
      }
    } else {
      setAnswerRequested(false);
    }
    setselectedQuestion(data);
    setAnswer(item.answer);
    setSource(item.source);
    setSelectedItem(key);
    setAnswerObject(item);
  };

  //timer creation from here
  const [timer, setTimer] = useState("00:00:00");
  const [totalSeconds, setTotalSeconds] = useState();
  const [timerId, setTimerId] = useState(null);

  function startTimer(duration) {
    var timer = duration,
      hours,
      minutes,
      seconds;
    setTimerId(
      setInterval(function () {
        hours = parseInt(timer / (60 * 60), 10);
        minutes = parseInt((timer / 60) % 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        setTimer(hours + ":" + minutes + ":" + seconds);

        if (--timer < 0) {
          timer = duration;
        }
      }, 1000)
    );
  }

  function stopTimer() {
    clearInterval(timerId);
  }

  const requestAnswer = async () => {
    if (state.Subscribe === "true" && answerObject.answer == undefined) {
      const link = "/textbook-solutions-manuals/" + notificationLink;
      const res = await askForSoltuion(
        books[0]?.BookName,
        chapterName,
        sections[0]?.section_name,
        answerObject.question,
        answerObject.q_id,
        answerObject.problem_no,
        state.email,
        state._id,
        link
      );
      if (res && res.status == 200) {
        setAnswerFetched(true);
        if (directProblem) {
          refetchProblemsDirect();
        } else {
          refetchProblems();
        }
      }
    }
  };

  const startAuthoring = async () => {   
  if(state.isLoggedIn){
    const res = await askForBook(
      ISBN13,
      books[0]?.BookName,
      books[0].Edition,
      state._id,
      state.fullname
    );
    if (res && res.status == 200) {
      history.push("/user/my-tbs");
    }
  }else{
    history.push("/auth/signin");
  }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "editor";
    script.src =
      "https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image";
    // script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.0.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
    script.async = true;
    document.body.appendChild(script);
  });

  useEffect(() => {
    if (
      (problems && problems.length > 0) ||
      (problemsDirect && problemsDirect.length > 0)
    ) {
      
      const slug =
        params.subject != undefined && params.subject.match(problemRegex); // 01-2020
      const QUESTION = slug ? slug[1] : null;
      if (QUESTION) {
        setQuestion(QUESTION);
        
        const ques =
          problems && problems.length > 0
            ? problems.filter(
                (item) => item.problem_no.toLowerCase() === QUESTION
              )
            : problemsDirect.filter(
                (item) => item.problem_no.toLowerCase() === QUESTION
              );
        ques.length > 0 &&
          setselectedQuestion(ques[0].problem_no + " : " + ques[0].question); //used for the first time, since if we change the question that has no question_name only has question_no.
      } else {
        if (problems && problems.length > 0)
          setselectedQuestion(
            problems[0].problem_no + " : " + problems[0].question
          );
        else
          setselectedQuestion(
            problemsDirect[0].problem_no + " : " + problemsDirect[0].question
          ); ///added for case when dere is NULL in section.section_no
      }
    }
    return () => {};
  }, [problems, problemsDirect]);

  useEffect(() => {
    if (books && books.length > 0) {
      books[0].similarBooks.length > 0
        ? setSimilarBooks(books[0].similarBooks)
        : setRelatedBook(books[0].sub_subject_name);
      //seo starts
      setSeo(books[0].seo);
      if (seo) {
        let mapObj = {
          "#BookName#": books[0].BookName,
          "#edition#": books[0].Edition,
        };
        setTitle(replaceAll(books[0].MetaTitle, mapObj));
        setDescription(replaceAll(books[0].MetaDescription, mapObj));
        setKeywords(replaceAll(books[0].MetaKeywords, mapObj));
        setAlttext(replaceAll(books[0].AltImage, mapObj));
        //seo ends
      }
      // else{
      //     setTitle(books[0].BookName + ' ' + books[0].Edition + " Solutions");
      // }
      setNotificationLink(params.subject);
    }
    return () => {};
  }, [books, seo]);

  useEffect(() => {
    if (chapters && chapters.length > 0) {
      const slug =
        params.subject != undefined && params.subject.match(chapterRegex); // 01-2020
      const CHAPTER = slug ? slug[1] : null;
     
      if (CHAPTER) {
        setChapter(CHAPTER);
        const chap = chapters.filter((item) => item.chapter_no === CHAPTER);
        
        setChapterName(chap[0].chapter_name); //used for the first time, since if we change the question that has no question_name only has question_no.
      } else {
        setChapter(chapters[0].chapter_no);
        setChapterName(chapters[0].chapter_name); //used for the first time, since if we change the question that has no question_name only has question_no.
      }
    }
    return () => {};
  }, [chapters]);

  useEffect(() => {
    if (sections && sections.length > 0) {
      if (
        sections[0] &&
        sections[0].section_no != "NULL" &&
        sections[0].section_no != ""
      ) {
        setSection(sections[0].section_no);
        setDirectProblem(false);
        setDisplay("block");
        setColMd6("");
      }
      if (sections[0] && sections[0].section_no == "NULL") {
        //for when section_no is equal to NULL
        setDirectProblem(true);
        setDisplay("none");
        setColMd6("col-md-6");
      }
    } else {
      setDirectProblem(true);
      setDisplay("none");
      setColMd6("col-md-6");
    }
    return () => {};
  }, [sections]);

  useEffect(() => {
    if (exercises && exercises.length > 0) {
      if (
        exercises[0] &&
        exercises[0].excerise != "NULL" &&
        exercises[0].excerise != "" &&
        exercises[0].excerise != undefined
      ) {
        setExercise(exercises[0].excerise);
        setDirectProblem(false);
      }
      if (exercises[0] && exercises[0].excerise == undefined) {
        //for when section_no is equal to NULL
        setDirectProblem(true);
      }
    } else {
      setDirectProblem(true);
    }
    return () => {};
  }, [exercises]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search && search.length > 3 && search != "") {
        openSearch(ISBN13, search);
      } else if (search === "") {
        setSearchedItems(null);
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  useEffect(() => {
    if (state.isLoggedIn != "true") {
      setLoc(
        "/auth/signin?callbackUrl=" +
          `${process.env.REACT_APP_URL}` +
          "/textbook-solutions-manuals/" +
          params.subject
      );
    } else if (state.isLoggedIn == "true" && state.Subscribe != "true") {
      setLoc("/paynow");
    }
  }, []);

  //schema useEffect
  useEffect(() => {
    if (books && books.length > 0) {
      setBreadcrumbSchema({
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.crazyforstudy.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id":
                "https://www.crazyforstudy.com/textbook-solutions-manuals/",
              name: "Textbook Solutions Manual",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": `https://www.crazyforstudy.com/textbook-solutions-manuals/${
                books[0] && books[0]?.subject_name
              }/`,
              name: `${capitalize(books[0] && books[0]?.subject_name)}`,
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@id": `https://www.crazyforstudy.com/textbook-solutions-manuals/${
                books[0] && books[0]?.subject_name
              }/${books[0] && books[0]?.sub_subject_name}/`,
              name: `${capitalize(books[0] && books[0]?.sub_subject_name)}`,
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@id": `https://www.crazyforstudy.com/textbook-solutions-manuals/${params.subject}`,
              name: `${books[0].BookName}`,
            },
          },
        ],
      });

      setReviewSchema({
        "@context": "http://schema.org",
        "@type": "Book",
        name: `${
          books[0].BookName + " " + books[0].Edition + " Solutions manual"
        }`,
        bookEdition: `${books[0].Edition?.split(" ", 1)}`,
        image: "https://www.crazyforstudy.com/uploads/.jpg",
        author: {
          "@type": "Person",
          name: `${books[0].Author1}`,
        },
        inLanguage: "English",
        isbn: `${books[0].ISBN13}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: `${books[0].ratingAv}`,
          bestRating: `${books[0].bestRating}`,
          ratingCount: `${books[0].total}`,
        },
      });

      let faqScript = [];
      books[0] &&
        books[0].faqs.forEach((item) => {
          faqScript.push({
            "@type": "Question",
            name: `${item.question}`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${item.answer}`,
            },
          });
        });

      setFaqSchema({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqScript,
      });
    }
  }, [books]);

  if (!ISBN13) return <Subject />;

  async function openSearch(bookIsbn, e) {
    const data = await searchQuestions(bookIsbn, e);
    console.log('data',data)
    setSearchedItems(data.problems);
  }

  if (chapterIsLoading) return <div id="loading"></div>;

  //seo starts
  const path = process.env.REACT_APP_URL + location.pathname;
  //seo ends

  return (
    <>
      <Marquee />
      <Seo
        path={path}
        title={title}
        description={description}
        keywords={keywords}
        robots={robots}
        breadcrumbSchema={breadcrumbSchema}
        reviewSchema={reviewSchema}
        faqSchema={faqSchema}
        ISBN13={ISBN13 && ISBN13}
      />
      <Header />
      <Navbar />
      <BreadCrumb
        type={"TextBook Manual"}
        heading={books && books[0] && books[0].BookName}
        subject={books && books[0] && books[0].subject_name}
        sub_subject={books && books[0] && books[0].sub_subject_name}
      />
      <BookInfo bookData={books && books[0]} altText={altText} />

      <section className="section font_sz text_justify pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bg_chapter">
                <div className="row">
                  <div className={`col-md-3 ${colMd6}`}>
                    <div className="chapter">
                      <label>Chapter</label>
                      <select
                        className="form-control"
                        onChange={handleChapter}
                        value={chapter}
                      >
                        {chapters &&
                          chapters.map((item, key) => {
                            return (
                              <option
                                key={key}
                                value={item.chapter_no}
                                data-chapter={
                                  item.chapter_name &&
                                  item.chapter_name.substring(0, 50)
                                }
                              >
                                {item.chapter_no} - {item.chapter_name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3" style={{ display: `${display}` }}>
                    <div className="chapter">
                      <label>Section</label>
                      <select className="form-control" onChange={handleSection}>
                        {sections &&
                          sections.map((item, key) => {
                            return (
                              <option key={key} value={item.section_no}>
                                {item.section_no} - {item.section_name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3" style={{ display: `${display}` }}>
                    <div className="chapter">
                      <label>Exercise</label>
                      <select
                        className="form-control"
                        onChange={handleExercise}
                      >
                        {exercises &&
                          exercises.map((item, key) => {
                            return (
                              <option key={key} value={item.excerise}>
                                {item.excerise}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div className={`col-md-3 ${colMd6}`}>
                    <div className="chapter">
                      <label>Question</label>
                      <select
                        className="form-control"
                        onChange={handleQuestion}
                        id="handle-question"
                        value={question}
                      >
                        {sections &&
                          problems &&
                          problems.map((item, key) => {
                            return (
                              <option
                                key={key}
                                value={item.problem_no.toLowerCase()}
                                data-question={
                                  item.question &&
                                  item.question.substring(0, 50)
                                }
                              >
                                {item.problem_no} -{" "}
                                {item.question &&
                                  item.question.substring(0, 50)}{" "}
                                . ..
                              </option>
                            );
                          })}
                        {problemsDirect &&
                          problemsDirect.map((item, key) => {
                            return (
                              <option
                                key={key}
                                value={item.problem_no.toLowerCase()}
                                data-question={
                                  item.question &&
                                  item.question.substring(0, 50)
                                }
                              >
                                {item.problem_no} -{" "}
                                {item.question &&
                                  item.question.substring(0, 50)}{" "}
                                . ..
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                </div>

                <form>
                  <input
                    type="text"
                    placeholder="Search for Questions..."
                    className="form-control"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section font_sz text_justify pb-4">
        <div className="container">
          <div className="row">
            {chapters.length == 0 ? (
              <div className="col-md-12 text-center sendnotification">
                <div className="ban-sorry">
                  <img
                    src="/images/sorry.png"
                    className="img-fluid"
                    alt="sorry"
                  />
                </div>
                <h5>
                  <strong>Sorry!</strong> We don’t have the solution of this
                  book edition yet.
                </h5>
                <button
                  type="button"
                  className="btnnn"
                  onClick={startAuthoring}
                >
                  Click here to request priority authoring of this edition.
                </button>
              </div>
            ) : (
              <div className="col-md-12">
                <div className="bg_qand_ans">
                  <div className="col-md-12 pb-4">
                    <div className="Qtion_n_Stion_text">
                      <h3 className="mb-4">
                        <span>Questions</span>
                      </h3>
                    </div>
                  </div>
                  {searchedItems ? (
                    <div className="col-md-12 pb-4">
                      <div className="Qtion_n_Stion_text Qtion_n_Stion_text_scroll">
                        {searchedItems && searchedItems.length > 0 ? (
                          searchedItems.map((item, key) => {
                            return (
                              <a href="#top" className="quest-click" key={key}>
                                <div
                                  className="bg_yellow_qa"
                                  style={{
                                    backgroundColor:
                                      key == selectedItem ? "#d3d3d3" : "",
                                  }}
                                  key={key}
                                  onClick={() => {
                                    clickedQues(
                                      item.problem_no + " : " + item.question,
                                      item,
                                      key
                                    );
                                  }}
                                >
                                  {" "}
                                  <strong>Q : {item.problem_no} </strong>
                                  <Highlighter
                                    highlightClassName="YourHighlightClass"
                                    searchWords={[search]}
                                    autoEscape={true}
                                    caseSensitive={false}
                                    textToHighlight={item.question}
                                  />
                                </div>
                              </a>
                              // {/* <div className="bg_yellow_qa" key={key}> <strong>Q :{item.problem_no}</strong>{item.question}</div> */}
                            );
                          })
                        ) : (
                          <div>
                            {" "}
                            <strong>No Results Found</strong>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-12 pb-4">
                      <div className="Qtion_n_Stion_text Qtion_n_Stion_text_scroll">
                        {problemIsLoading
                          ? "loading..."
                          : problems &&
                            problems.map((item, key) => {
                              return (
                                <a
                                  href="#top"
                                  className="quest-click"
                                  key={key}
                                >
                                  <div
                                    className="bg_yellow_qa"
                                    style={{
                                      backgroundColor:
                                        key == selectedItem ? "#d3d3d3" : "",
                                    }}
                                    key={key}
                                    onClick={() => {
                                      clickedQues(
                                        item.problem_no + " : " + item.question,
                                        item,
                                        key
                                      );
                                    }}
                                  >
                                    {" "}
                                    <strong>Q : {item.problem_no}</strong>{" "}
                                    {item.question}
                                  </div>
                                </a>
                              );
                            })}
                        {problemDirectIsLoading
                          ? "loading..."
                          : problemsDirect &&
                            problemsDirect.map((item, key) => {
                              return (
                                <a
                                  href="#top"
                                  className="quest-click"
                                  key={key}
                                >
                                  <div
                                    className="bg_yellow_qa"
                                    style={{
                                      backgroundColor:
                                        key == selectedItem ? "#d3d3d3" : "",
                                    }}
                                    key={key}
                                    onClick={() => {
                                      clickedQues(
                                        item.problem_no + " : " + item.question,
                                        item,
                                        key
                                      );
                                    }}
                                  >
                                    {" "}
                                    <strong>Q : {item.problem_no}</strong>{" "}
                                    {item.question}
                                  </div>
                                </a>
                              );
                            })}
                      </div>
                    </div>
                  )}

                  <div className="bg_qand_ans box_sdw_n pl-0 pr-0" id="top">
                    <div className="col-md-12 pb-4">
                      <div className="Qtion_n_Stion_text">
                        <h3 className="mb-4">
                          <span>Question and Solution</span>
                        </h3>
                        <div className="read_more_q">
                          <span className="qustion_mark">Q:</span>{" "}
                          <div className="read_more_text">
                            {selectedQuestion}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 pb-4">
                      <div className="Qtion_n_Stion_text">
                        <div className="read_more_q">
                          {state.Subscribe !== "true" ? (
                            <div className="read_more_text_a bg_text_img">
                              <div className="Get_Answer_text m-auto">
                                <p>
                                  This problem has been <span>solved!</span>
                                </p>
                                <div className="btn1 Get_Answer_btn">
                                  <Link to={`${loc}`} className="red_text1">
                                    {state.isLoggedIn != "true"
                                      ? "Login to Get Answer"
                                      : state.Subscribe != "true"
                                      ? "Subscribe to Get Answer"
                                      : "Click to Get Answer"}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div
                              className={
                                answer != Link
                                  ? "read_more_text_a"
                                  : "bg_text_img"
                              }
                            >
                              {(answer == undefined || answer == "") &&
                              answerRequested == true ? (
                                <div className="text-center">
                                  <h2 className="text-black font-30">
                                    Stay tuned, your answer will be ready within
                                  </h2>
                                  <span>
                                    <br />
                                    <p className="text-center">
                                      <strong>{timer}</strong>
                                    </p>
                                    {totalSeconds == 0 ? (
                                      <p className="text-center">
                                        Its taking longer than expected, Please
                                        be Patient
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                    {/* <img src="/images/time_hour.png" className="img-fluid" alt="time hour"/> */}
                                  </span>
                                </div>
                              ) : (answer == undefined || answer == "") &&
                                answerRequested == false ? (
                                <div className="read_more_text_a bg_text_img">
                                  <div className="Get_Answer_text m-auto">
                                    <p>
                                      This problem has not been{" "}
                                      <span>solved yet!</span>
                                    </p>
                                    <div className="btn1 Get_Answer_btn">
                                      {state.isLoggedIn != "true" ? (
                                        <Link
                                          to={`${loc}`}
                                          className="red_text1"
                                        >
                                          Login to Get Answer
                                        </Link>
                                      ) : (
                                        <Link
                                          to="#"
                                          className={
                                            "red_text1 " +
                                            (answerFetched ? "disabled" : "")
                                          }
                                          onClick={() => {
                                            requestAnswer();
                                          }}
                                        >
                                          {answerFetched
                                            ? "Requested"
                                            : "Request Answer"}
                                        </Link>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ) : source === "bartelby" ? (
                                <Answer
                                  answers={JSON.parse(answer)}
                                  type="exp_ans"
                                />
                              ) : (
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: `${answer}`,
                                  }}
                                ></span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Subscription />
      <Description description={books && books[0] && books[0]?.Description} />
      <Details />
      <Reviews
        reviews={books && books[0] && books[0].reviews}
        book={books && books[0]}
      />
      <RelatedTbs
        data={similarBooks ? similarBooks : relatedBooks}
        heading={books && books[0].similarHeading && books[0].similarHeading}
      />
      <Faq
        data={books && books[0] && books[0].faqs}
        heading={books && books[0].faqHeading && books[0].faqHeading}
      />
      <Follow />
      <Footer />
    </>
  );
}
