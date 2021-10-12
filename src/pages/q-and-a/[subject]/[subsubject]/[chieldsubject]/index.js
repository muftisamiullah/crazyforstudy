//page not being used since child subject is not being shown
import {Helmet} from 'react-helmet-async'
import Header from '../../../../../components/website/home/header'
import Navbar from '../../../../../components/website/home/navbar'
import Footer from '../../../../../components/website/home/footer'
import Follow from '../../../../../components/website/home/follow'
import BreadCrumb from '../../../../../components/website/q-and-a/qa-breadcrumb'
import Questions from '../../../../../components/website/q-and-a/question/questions'
import AskFifty from '../../../../../components/website/q-and-a/question/ask-fifty'
import HomeWork from '../../../../../components/website/q-and-a/question/home-work'
import RelatedTbs from '../../../../../components/website/book-detail/related-tbs'
import { useQuery } from 'react-query'
import {getQandAChildSubjects} from '../../../../../libs/subsubject'
import { useParams } from "react-router-dom";
import { useState } from 'react'
import { GetName, capitalize } from '../../../../../components/common/make-slug'

export default function QuestionsAndAnswers() {
    const [pageNo, setPageNo] = useState(0);
    const params = useParams();

    const { data: qandas, isLoading:qandasIsLoading, error:qandassubjectsError } = useQuery([params.chieldsubject, pageNo], () => getQandAChildSubjects({child_subject: params.chieldsubject, pageno : pageNo}),{staleTime:Infinity, enabled: !!params.chieldsubject}) //only called when subject would be present

    return(
        <>
            <Helmet>
                <title>Crazy For Study</title>
            </Helmet>
            <Header/>
            <Navbar/>
            <BreadCrumb type={"Q & A"} heading={params.chieldsubject} subject={params.subject} sub_subject={params.subsubject}/>
            <Questions data={qandas} isLoading={qandasIsLoading} heading={capitalize(GetName(params.chieldsubject))} setPageNo={setPageNo} pageNo={pageNo}/>
            <AskFifty/>
            <HomeWork/>
            <RelatedTbs heading={"Students who viewed Socialogy Homework Questions and Answers also checked out"} subHeading={`Recently Added Top 4 ${params.subject} Textbook Solutions Manual`}/>
            <Follow/>
            <Footer/>
        </>
    )
}