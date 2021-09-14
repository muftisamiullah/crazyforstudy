import {Helmet} from 'react-helmet-async'
import Header from '../../../../components/website/home/header'
import Navbar from '../../../../components/website/home/navbar'
import Footer from '../../../../components/website/home/footer'
import Follow from '../../../../components/website/home/follow'
import QandASearch from '../../../../components/website/q-and-a/q-and-a-search'
import AskExpert2 from '../../../../components/website/q-and-a/ask-an-expert2'
import CollegeHomework from '../../../../components/website/q-and-a/college-homework'
import StepByStep from '../../../../components/website/q-and-a/step-by-step'
import BrowseBySubjects3 from '../../../../components/website/q-and-a/browser-by-subjects3'
import BusinessHomework from '../../../../components/website/q-and-a/business-homework'
import Services from '../../../../components/website/q-and-a/services'
import { useQuery } from 'react-query'
// was used to show child category
// import {getChildSubjects} from '../../../../libs/subsubject'
import {getQandAChildSubjects2} from '../../../../libs/subsubject'
import { useParams } from "react-router-dom";
import BreadCrumb from '../../../../components/website/q-and-a/qa-breadcrumb'
import Questions from '../../../../components/website/q-and-a/question/questions'
import { useState } from 'react'
import { GetName, capitalize } from '../../../../components/common/make-slug'
import AskFifty from '../../../../components/website/q-and-a/question/ask-fifty'
import HomeWork from '../../../../components/website/q-and-a/question/home-work'

export default function QandASubCategory() {
    const [pageNo, setPageNo] = useState(0);
    const params = useParams();
    
    // was used to show child category
    // const { data: childsubjects, isLoading:childsubjectsIsLoading, error:childsubjectsError } = useQuery([params.subsubject], () => getChildSubjects(params.subsubject),{staleTime:Infinity, enabled: !!params.subsubject}) //only called when subject would be present
    console.log(params)
    const { data: qandas, isLoading:qandasIsLoading, error:qandassubjectsError } = useQuery([params.subsubject,params.subject,pageNo], () => getQandAChildSubjects2({subject: params.subject, sub_subject: params.subsubject, pageno : pageNo}),{staleTime:Infinity, enabled: !!params.subsubject}) //only called when subject would be present

    return(
        <>
            <Helmet>
                <title>Crazy For Study</title>
            </Helmet>
            <Header/>
            <Navbar/>
            <BreadCrumb type={"Q & A"} heading={params.subsubject} subject={params.subject} sub_subject={params.subsubject}/>
            {/* <QandASearch/>
            <StepByStep/> */}
            {/* added new instead of child*/}
            <Questions data={qandas} isLoading={qandasIsLoading} heading={capitalize(GetName(params.chieldsubject))} setPageNo={setPageNo} pageNo={pageNo}/>
            {/*  was used to show child category */}
            {/* <BrowseBySubjects3 data={childsubjects} heading={params.subsubject}/> */}
            {/* <BusinessHomework/> */}
            <AskFifty/>
            <HomeWork/>
            <Services/>
            <Follow/>
            <Footer/>
        </>
    )
}