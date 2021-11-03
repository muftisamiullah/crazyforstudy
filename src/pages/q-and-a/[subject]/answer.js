import {Helmet} from 'react-helmet-async'
import Header from '../../../components/website/home/header'
import Navbar from '../../../components/website/home/navbar'
import Footer from '../../../components/website/home/footer'
import Follow from '../../../components/website/home/follow'
import BreadCrumb from '../../../components/website/q-and-a/qa-breadcrumb'
import Answer from '../../../components/website/q-and-a/answer/answer'
import { useQuery } from 'react-query'
import { getQandAnswer } from '../../../libs/subsubject'
import { useParams } from "react-router-dom";
import { useState, useContext } from 'react'
import {AuthContext} from '../../../context/AuthContext';
import Marquee from '../../../components/common/marquee';

export default function QuestionsAndAnswers() {
    const { state } = useContext(AuthContext);
    const params = useParams();


    //new  code to retrve id
    const segment_array = params.subject != undefined ? params.subject.split( '-' ) : params.subject;
    const last_segment = segment_array.pop();
    //new  code to retrve id
    
    //prev code before last segment
    // const regex = /\d+$/; //

    // const data = params.subject != undefined ? params.subject.match(regex) : params.subject;
    // const old_qid = data ? data[0] : null; 
    //prev code before last segment
    const getHighlight = params.subject?.substr(0, params.subject.length-6);
    const abstrophy = unescape(getHighlight)

    const { data: answer, isLoading:answerIsLoading, error:answerSubjectsError } = useQuery([last_segment], () => getQandAnswer(last_segment, state.Subscribe),{staleTime:Infinity, enabled: !!last_segment}) //only called when subject would be present

    return(
        <>
            <Helmet>
                <title>Crazy For Study</title>
            </Helmet>
            <Marquee/>
            <Header/>
            <Navbar/>
            {/* <BreadCrumb type={"Q & A"} heading={abstrophy} subject={answer?.subject} sub_subject={answer?.subsubject} sub_sub_subject={params.chieldsubject}/> */}
            <BreadCrumb type={"Q & A"} heading={abstrophy} subject={answer?.subject} sub_subject={answer?.subsubject} sub_sub_subject={answer?.cheild_subject}/>
            <Answer data={answer}/>
            <Follow/>
            <Footer/>
        </>
    )
}