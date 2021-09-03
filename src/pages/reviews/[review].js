import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import Follow from '../../components/website/home/follow'
import ViewAll from '../../components/website/ratings/view-all'
import Modal from '../../components/common/modal'
import {useState } from 'react'

export default function Review(){
    const [display, setDisplay] = useState(false);
    const [modalClass, setModalClass] = useState(false);
    const openDialog =  () => {
        setDisplay('block')
        setModalClass('show')
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }

    return(
        <>
            <Header/>
            <Navbar/>
            <ViewAll open={openDialog}/>
            <Modal modalClass={modalClass} display={display} setDisplay={setDisplay} setModalClass={setModalClass}/>
            <Follow/>
            <Footer/>
        </>
    )
}