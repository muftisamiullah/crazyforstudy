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
import { useParams } from "react-router-dom";
import Answer from './answer'

export default function QandACategory() {
    const params = useParams();

    const regex = /\d+$/; //

    const data = params.subject != undefined ? params.subject.match(regex) : params.subject;
    const OLD_QID = data ? data[0] : null; 

    const { data: subsubjects, isLoading:subsubjectsIsLoading, error:subsubjectsError } = useQuery([params.subject], () => getSubSubject(params.subject),{staleTime:Infinity, enabled: !!params.subject}) //only called when subject would be present
    if(OLD_QID)
        return <Answer/>

    return(
        <>
            <Helmet>
                <title>Crazy For Study</title>
            </Helmet>
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