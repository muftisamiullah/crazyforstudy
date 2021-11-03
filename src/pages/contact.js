import {helmet} from 'react-helmet-async'
import Header from '../components/website/home/header'
import Footer from '../components/website/home/footer'
import Marquee from '../components/common/marquee';

export default function Contact() {
  return (
    <>
      <helmet>
        <title>Crazy For Study</title>
        <link rel="icon" href="/favicon.ico" />
      </helmet>
      <Marquee/>
      <Header/>
      <h1>CFS contact</h1>
      <Footer/>
    </>
  )
}
