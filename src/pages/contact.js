import {helmet} from 'react-helmet-async'
import Header from '../components/website/home/header'
import Footer from '../components/website/home/footer'

export default function Contact() {
  return (
    <>
      <helmet>
        <title>Crazy For Study</title>
        <link rel="icon" href="/favicon.ico" />
      </helmet>
      <Header/>
      <h1>CFS contact</h1>
      <Footer/>
    </>
  )
}
