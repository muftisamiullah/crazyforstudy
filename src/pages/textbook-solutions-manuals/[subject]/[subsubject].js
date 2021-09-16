import Header from '../../../components/website/home/header'
import Navbar from '../../../components/website/home/navbar'
import Footer from '../../../components/website/home/footer'
import Follow from '../../../components/website/home/follow'
import BreadCrumb from '../../../components/website/textbook-solutions-manuals/tbs-breadcrumb'
import BuySubscription from '../../../components/website/all-subjects/buy-subscription'
import AllBooks from '../../../components/website/all-subjects/all-books'
import AddBook from '../../../components/website/all-subjects/add-book'
import StudentViewed from '../../../components/website/all-subjects/students-viewed'
import GetSolManual from '../../../components/website/all-subjects/get-sol-manual'
import {getBooks} from "../../../libs/subsubject"
import { useParams, useLocation, useHistory } from "react-router-dom";
// import {getNavbarData} from "../../../libs/home"
import {useEffect, useState} from 'react';
import { useQuery } from 'react-query'
import {Helmet} from 'react-helmet-async'
import { capitalize,GetName } from "../../../components/common/make-slug";
import Seo from '../../../components/common/seo'

// export async  function getServerSideProps(context){
//     const data = await getBooks(context.params.subsubject);
//     return {
//         props: {
//             data: data,
//         },
//     };
// }

export default function SubSubject(){
    const [pageNo, setPageNo] = useState(0);
    const [saveParam, setSaveParam] = useState();
    const params = useParams();
    const location = useLocation();
    const history = useHistory();

    const title = `Get Reliable ${capitalize(params.subsubject)} Textbook Solutions Manual`
    const description = `Get Access ${capitalize(params.subsubject)} Textbook Solutions from Crazy For Study. For ${capitalize(params.subsubject)} textbook answers, ${capitalize(params.subsubject)} Step-by-step solutions, ${capitalize(params.subsubject)} Solutions manual and Assignment Help, try Crazy For Study today!`
    const keywords = `${capitalize(params.subsubject)} textbook solutions, ${capitalize(params.subsubject)} solutions manual, ${capitalize(params.subsubject)} textbook solution manuals`
    const copyright = `Copyright ${new Date().getFullYear()} Crazyforstudy.com`
    const path = process.env.basePath + location.asPath

    const breadcrumbSchema = {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": 
        [{
            "@type": "ListItem",
            "position": 1,
            "item": {
                    "@id": "https://www.crazyforstudy.com/",
                    "name": "Home"
                }
        },
        {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "@id": "https://www.crazyforstudy.com/textbook-solutions-manuals/",
                "name": "Textbook Solutions Manual"
                }
        },
        {
            "@type": "ListItem",
            "position": 3,
            "item": {
                "@id": `https://www.crazyforstudy.com/textbook-solutions-manuals/${params.subject}/`,
                "name": `${capitalize(params.subject)}`
                }
        },
        {
            "@type": "ListItem",
            "position": 4,
            "item": {
                "@id": `https://www.crazyforstudy.com/textbook-solutions-manuals/${params.subject}/${params.subsubject}/`,
                "name": `${capitalize(params.subsubject)}`
            }
        }]
    }
    
    const { data, isLoading, error } = useQuery([params.subsubject,params.subject,pageNo], () => getBooks({sub_subject_name: params.subsubject, subject_name: params.subject, pageno : pageNo}))
    
    useEffect(()=>{
        if(saveParam != params.subsubject){
            setPageNo(0)
        }
        setSaveParam(params.subsubject)
    },[params.subsubject])

    if(isLoading)
        return <div id="loading"></div>

    return (
        <>
            {/* <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                <meta name="keywords" content={keywords}></meta>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="copyright" content={copyright} />
                <meta name="author" content="crazyforstudy.com" />
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href={path}/>
                
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={path} />
                <meta property="og:image" content="#SameAsBookImageURL" />
                <meta property="og:locale" content="en_US" />
                <meta name="og_site_name" property="og:site_name" content="Crazyforstudy.com"/>

                <meta name="twitter:widgets:csp" content="on"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content="@CrazyForStudy1"/>
                <meta name="twitter:image" content="#SameAsBookImageURL" />
            </Helmet> */}

            <Seo path={path} title={title} description={description} keywords={keywords} breadcrumbSchema={breadcrumbSchema}/>  
            <Header/>
            <Navbar/>
            <BreadCrumb type={"TextBook Manual"} heading={params.subsubject} subject={params.subject} sub_subject={params.subsubject}/>
            <BuySubscription/>
            <AllBooks data={data} setPageNo={setPageNo} pageNo={pageNo}/>
            <AddBook bookname={capitalize(GetName(params.subsubject))}/>
            <StudentViewed bookname={capitalize(GetName(params.subsubject))}/>
            <GetSolManual bookname={capitalize(GetName(params.subsubject))}/>
            <Follow/>
            <Footer/>
        </>
    )
}