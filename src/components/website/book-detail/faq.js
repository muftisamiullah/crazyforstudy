import { Link } from 'react-router-dom';
import {useState} from 'react'


export default function Faq({...props}){
    const [whichCollapse, setWhichCollapse] = useState('')

    const openCollapse = (e,string) =>{
        e.preventDefault();
        if(whichCollapse == string){
            setWhichCollapse('')
        }else{
            setWhichCollapse(string)
        }
    }
    
    return(
        <section className="faq faq_bg_sctn faq-t">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <div className="Content_Covered_title pb-3">
                            <h2>{props.heading ? props.heading : "CrazyForStudy Frequently asked questions"}</h2> 
                        </div>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <ul className="faq-list">
                            {props.data && props.data.map((item,key)=>{
                                return(
                                    <li key={key}>
                                        <a data-toggle="collapse" className="collapsed" href="#" onClick={(e)=>{openCollapse(e,`faq${key}`)}}>{item.question}<i className="fa fa-angle-up"></i></a>
                                        <div id="" className={"collapse" + (whichCollapse == `faq${key}` ? 'show' : '' )} data-parent=".faq-list" >
                                            <p className="first-para"><strong>Answer : </strong><span dangerouslySetInnerHTML={{__html: item.answer}}></span></p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-md-5 faq_img text-center">
                        <span><img src="/images/faq_img.png" className="img-fluid"/></span>
                    </div>

                </div>
            </div>
        </section>  
    )
}