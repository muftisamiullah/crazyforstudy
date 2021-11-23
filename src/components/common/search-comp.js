import {useState,useEffect,useRef} from 'react';
import {searchData} from '../../libs/search'
import BookImage from './book-image'
import { Link } from 'react-router-dom';
import {MakeSlug} from '../common/make-slug'
// import parse from 'html-react-parser';   // we used htmlDecode for the same purpose
import { stringToSlug, htmlDecode } from '../common/make-slug';
// import striptags from 'striptags';   // we used htmlDecode for the same purpose
// import {CancelToken} from '../../../src/libs/search'

export default function SearchComp({...props}){

    const [ display, setDisplay ] = useState('none');
    const [ searchedQuestions, setSearchedQuestions ] = useState(null);
    const [ QA, setQA ] = useState(null);
    const [ searchedBooks, setSearchedBooks ] = useState(null);
    const [ search, setSearch ] = useState(null);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if(search && search.length > 3 && search != ''){
                setDisplay('block');
                openSearch(search);
            }else if(search === ""){
                setDisplay('none');
                setSearchedBooks(null)
                setSearchedQuestions(null)
                setQA(null)
            }
          }, 1000);
        return () => { 
            clearTimeout(delayDebounceFn) 
            // CancelToken.cancel('optional message');
        }
    },[search]);

    async function openSearch (e){
        // CancelToken.cancel('optional message');
        const data = await searchData({search:e,limit:3});
        if(data){
            setSearchedBooks(data.data2.books);
            setSearchedQuestions(data.data1.questions);
            setQA(data.data3.questions);
            if(data && data.data1.questions.length == 0 && data.data2.books.length == 0 && data.data3.questions.length == 0){
                setDisplay('none');
            }
            if(data.data2.books.length == 0){
                setDisplay('none');
            }
        }
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    // document.querySelector("body").classList.remove("overlay-open")
                    setDisplay('none');
                }
            }
    
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const outsideRef = useRef(null);
    useOutsideAlerter(outsideRef);

    return (
        <>
            <form>
                <input type="text" placeholder={props.placeholder} className="form-control" onChange={(e)=>{setSearch(e.target.value)}}/>
                    <Link to={`/search/${search}`}><button type="submit" className="search_btn">{props.btnText}</button></Link>
            </form>
            
            <div className="search_prodt1" style={{display: `${display}`}} ref={outsideRef}> 
                <div className="">
                    <div className="books_bg1">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="books_bg2">
                                    {searchedBooks && searchedBooks.length != 0 &&
                                    <div className="books_titles">
                                        Books
                                    </div>}
                                    {searchedBooks && searchedBooks.map((item,key)=>{
                                    return(<span key={key}>
                                        <Link to={`/textbook-solutions-manuals/isbn-${item.ISBN13}-${MakeSlug(item.BookName)}-${MakeSlug(item.Edition)}`}>
                                            <div className="picking_img1">
                                                <BookImage isbn={item.ISBN13}/>
                                            </div>
                                            <div className="Picking_Cotton">
                                                <h3>{item.BookName}</h3>
                                                <p>{item.Author1}</p>
                                                <p><span>ISBN10 - {item.ISBN10} | ISBN13 - {item.ISBN13}</span></p>
                                            </div>
                                        </Link>
                                        </span>)
                                    })}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="books_bg2">
                                    {searchedQuestions && searchedQuestions.length != 0 &&
                                    <div className="books_titles">
                                        TextBook Question
                                    </div>
                                    }
                                    {searchedQuestions && searchedQuestions.map((item,key)=>{
                                    return(<span key={key}>
                                        <Link to={`/textbook-solutions-manuals/${MakeSlug(item.question.substring(0,50))}-chapter-${item.chapter_no}-problem-${MakeSlug(item.problem_no)}-solutions-${item.book_isbn}`}>
                                            <div className="Picking_Cotton">
                                                <h3>{item.question}</h3>
                                                <p>{item.book_name} | {item.book_isbn}</p>
                                                <p><span>Chapter Name: {item.chapter_name}, Chapter No: {item.chapter_no}</span></p>
                                            </div>
                                        </Link>
                                        </span>)
                                    })}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="books_bg2">
                                    {QA && QA.length != 0 &&
                                    <div className="books_titles">
                                        Q and A
                                    </div>
                                    }
                                    {QA && QA.map((item,key)=>{
                                        let child = "";
                                        if(item.question.includes('<p>')){
                                            // child = stringToSlug(parse(striptags(item.question)).substr(0,90))+'-'+item.old_qid;
                                            child = stringToSlug(htmlDecode(item.question).substr(0,90))+'-'+item.old_qid;
                                        }else{
                                            // child = stringToSlug(striptags(parse(item.question)).substr(0,90))+'-'+item.old_qid
                                            child = stringToSlug(htmlDecode(item.question)).substr(0,90)+'-'+item.old_qid
                                        }
                                    return(<span key={key}>
                                        <Link to={`/q-and-a/${child}`}>
                                            <div className="Picking_Cotton">
                                                <h3 dangerouslySetInnerHTML={{__html:(htmlDecode(item.question)).substr(0,200)}}></h3>
                                                <p><span>Subject Name: {item.subject}, Sub Subject: {item.sub_subject}</span></p>
                                            </div>
                                        </Link>
                                        </span>)
                                    })}
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-12 View_All_results">
                    <Link to={`/search/${search}`}>View All results</Link>
                    </div>
                </div>
            </div>
        </>
    )
}