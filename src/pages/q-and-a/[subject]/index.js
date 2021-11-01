import {Helmet}  from 'react-helmet-async'
import Header from '../../../components/website/home/header'
import Navbar from '../../../components/website/home/navbar'
import Footer from '../../../components/website/home/footer'
import Follow from '../../../components/website/home/follow'
import QandASearch from '../../../components/website/q-and-a/q-and-a-search'
import AskExpert2 from '../../../components/website/q-and-a/ask-an-expert2'
import CollegeHomework from '../../../components/website/q-and-a/college-homework'
import StepByStep from '../../../components/website/q-and-a/step-by-step'
import BrowseBySubjects2 from '../../../components/website/q-and-a/browse-by-subjects2'
import BusinessHomework from '../../../components/website/q-and-a/business-homework'
import Services from '../../../components/website/q-and-a/services'
import { useQuery } from 'react-query'
import {getSubSubject} from '../../../libs/subsubject'
import Answer from './answer'
import { capitalize } from "../../../components/common/make-slug";
import Seo from '../../../components/common/seo'
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Marquee from '../../../components/common/marquee';

export default function QandACategory() {
    const params = useParams();
    const location = useLocation();

    const regex = /\d+$/; //

    const data = params.subject != undefined ? params.subject.match(regex) : params.subject;
    const OLD_QID = data ? data[0] : null; 

    
    const [title, setTitle] = useState(`Get Reliable ${capitalize(params.subject)} Question and Answers`);
    const [description, setDescription] = useState(``);
    const [keywords, setKeywords] = useState(``);
    const [robots, setRobots] = useState('');
    const path = process.env.REACT_APP_URL + location.pathname

    const { data: subsubjects, isLoading:subsubjectsIsLoading, error:subsubjectsError } = useQuery([params.subject], () => getSubSubject(params.subject),{staleTime:Infinity, enabled: !!params.subject}) //only called when subject would be present

    useEffect(()=>{
        if(subsubjects && subsubjects.subject_seo){
            setTitle(subsubjects.subject_seo.qa_seo_details.meta_title)
            setDescription(subsubjects.subject_seo.qa_seo_details.meta_description)
            // setKeywords(subSubjects.subject_seo.textbook_seo_details.meta_keywords)
            setRobots("index, follow");
        }
    },[subsubjects])

    if(OLD_QID)
        return <Answer/>
    
    return(
        <>
            <Marquee/>
            <Seo path={path} title={title} description={description} keywords={keywords} robots={robots}/>
            <Header/>
            <Navbar/>
            <QandASearch/>
            {/* <AskExpert2/> */}
            {/* <CollegeHomework/> */}
            <StepByStep/>
            <BrowseBySubjects2 data={subsubjects} heading={params.subject}/>
            <BusinessHomework/>
            <Services/>
            <Follow/>
            <Footer/>
        </>
    )
}