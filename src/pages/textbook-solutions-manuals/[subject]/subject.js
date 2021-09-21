import Header from '../../../components/website/home/header'
import Navbar from '../../../components/website/home/navbar'
import Footer from '../../../components/website/home/footer'
import Follow from '../../../components/website/home/follow'
import AskAnExpert from "../../../components/website/textbook-solutions-manuals/ask-an-expert";
import CollegeTextbooks from "../../../components/website/textbook-solutions-manuals/college-texbooks";
import StepByStep from "../../../components/website/textbook-solutions-manuals/step-by-step";
import QandASearch from '../../../components/website/q-and-a/q-and-a-search'
import WhatStudentsThink from "../../../components/website/assignment-help/what-students-think";
import { useQuery } from 'react-query'
import { useParams, useHistory, useLocation } from 'react-router-dom';
import BrowseBySubjects from '../../../components/website/all-subjects/browse-by-subjects';
import InstantAccess from '../../../components/website/all-subjects/instant-access';
import About from '../../../components/website/all-subjects/about';
import {getSubSubject} from '../../../libs/subsubject'
import {Helmet} from 'react-helmet-async'
import { capitalize } from "../../../components/common/make-slug";
import Seo from '../../../components/common/seo'

export default function Subject(){
    const params = useParams();
    const location = useLocation();
    const history = useHistory();

    const title = `Get Reliable ${capitalize(params.subject)} Textbook Solutions Manual`
    const description = `Get Access ${capitalize(params.subject)} Textbook Solutions from Crazy For Study. For ${capitalize(params.subject)} textbook answers, ${capitalize(params.subject)} Step-by-step solutions, ${capitalize(params.subject)} Solutions manual and Assignment Help, try Crazy For Study today!`
    const keywords = `${capitalize(params.subject)} textbook solutions, ${capitalize(params.subject)} solutions manual, ${capitalize(params.subject)} textbook solution manuals`
    // const copyright = `Copyright ${new Date().getFullYear()} Crazyforstudy.com`
    const path = process.env.REACT_APP_URL + location.pathname

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
        }]
    }
    
    const { data: subSubjects, isLoading:subSubjectIsLoading, error:subSubjectError } = useQuery([params.subject], () => getSubSubject( params.subject ),{staleTime:Infinity})
    
    if(subSubjectIsLoading)
        return <div id="loading"></div>;

    return(
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
            <QandASearch/>
            <AskAnExpert/>
            <CollegeTextbooks/>         
            <StepByStep/>
            <BrowseBySubjects data={subSubjects}/>
            <About/>
            <InstantAccess/>
            <WhatStudentsThink/>
            <Follow/>
            <Footer/>
        </>
    )
}