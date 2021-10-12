import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Follow from '../components/website/home/follow'
import BreadCrumb from '../components/website/all-subjects/breadcrumb'
import BuySubscription from '../components/website/all-subjects/buy-subscription'
import AllBooks from '../components/website/all-subjects/all-books'

export default function AllSubjects() {
    return(
        <>
            <Header/>
            <Navbar/>
            <BreadCrumb/>
            <BuySubscription/>
            <AllBooks/>
            <Follow/>
            <Footer/>
        </>
    )
}