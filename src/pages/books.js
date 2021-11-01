import Head from 'next/head'
import Header from '../components/website/home/header'
import Footer from '../components/website/home/footer'
import Marquee from '../components/common/marquee';

export default function Books() {
  return (
    <>
      <Marquee/>
      <Head>
        <title>Crazy For Study</title>
      </Head>
      <Header/>
      <Footer/>
    </>
  )
}
