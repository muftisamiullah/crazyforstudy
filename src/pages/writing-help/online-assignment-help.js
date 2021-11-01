import {Helmet} from 'react-helmet-async'
import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import SubmitAssignment  from "../../components/website/assignment-help/submit-assignment";
import Help from "../../components/website/assignment-help/help"
import Features from "../../components/website/assignment-help/features"
import About from "../../components/website/assignment-help/about"
import MultipleHelp from "../../components/website/assignment-help/multiple-help"
import Reviews from "../../components/website/assignment-help/reviews"
import WhyChoose from "../../components/website/assignment-help/why-choose"
import WhatStudentsThink from "../../components/website/assignment-help/what-students-think"
import StudyHelp from '../../components/common/study-help'
import {useEffect} from 'react'

export default function OnlineAssignmentHelp() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
          <title>Assignment Help Services | Customized Assignment Solutions</title>
          <meta name="description" content="CFS offers fully customized, and plagiarism free assignment help services that help you gain better scores in exams."></meta>
      </Helmet>
      <Header/>
      <Navbar/>
      <SubmitAssignment/>
      <Help/>
      <Features/>
      <Reviews/>
      <About/>
      <MultipleHelp/>
      <WhyChoose/>
      <WhatStudentsThink/>
      <StudyHelp/>
      <Footer/>
    </>
  )
}
