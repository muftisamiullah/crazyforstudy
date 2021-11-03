import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import Follow from '../../components/website/home/follow'
import BreadCrumbFAQ from '../../components/website/faq/breadcrumbFAQ'
import { getCategoryFaqs } from '../../libs/faq'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom';
import {useState, useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import Marquee from '../../components/common/marquee';

export default function FaqId(){
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;

    const params = useParams();
    const [whichCollapse, setWhichCollapse] = useState()

    const openCollapse = (string) =>{
        if(whichCollapse == string){
            setWhichCollapse('')
        }else{
            setWhichCollapse(string)
        }
    }

    const { data: faqContent, isLoading:faqIsLoading, error:faqError } = useQuery(['faq-category-'+`${params.id}`], () => getCategoryFaqs(params.id),{staleTime:Infinity})

    return(
        <>
        <Marquee/>
        <Header/>
        <Navbar/>
        <BreadCrumbFAQ type={"Frequently Asked Questions"} heading={params.id} subject={params.id} sub_subject={""}/>
        <section className="faq faq_bg_sctn">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12 text-center mb-5">
                        <div className="Content_Covered_title pb-1">
                            <h2>FAQ's</h2>
                            <p>Get answers to the most frequently asked questions from students and make your decision to get better grades.</p>
                        </div>
                    </div>
                    <div className="col-md-9 m-auto">
                        <ul className="faq-list">
                            {faqContent && faqContent.data.map((item,key)=>{
                                return(<li key={key}>
                                    <a data-toggle="collapse" className="collapsed bdr_3" href="#faq1" onClick={()=>{openCollapse(`faq${key}`)}}>{item.question} <i className="fa fa-angle-up"></i></a>
                                    <div className={"collapse sub_text1 " + (whichCollapse == 'faq'+`${key}` ? 'show' : '' )} data-parent=".faq-list">
                                        <p className="first-para"><strong>Answer : </strong><p dangerouslySetInnerHTML={{__html:item.answer}}></p></p>
                                    </div>
                                </li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Follow/>
        <Footer/>
        </>
    )
}