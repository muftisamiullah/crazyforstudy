import BookImage from '../../common/book-image'
import { Link } from 'react-router-dom';
import { useState, useEffect,useContext } from 'react';
import {AuthContext} from '../../../context/AuthContext';
// import { getEdition } from '../../common/make-slug'

export default function BookInfo({...props}){
    const [ location, setLocation ] = useState('/');
    const { state } = useContext(AuthContext);
    // const [ updatedEdition, setUpdatedEdition ] = useState('')

    useEffect(()=>{
        if(state.Subscribe != "true"){
            setLocation('/paynow')
        }else if(state.Subscribe == "true"){
            setLocation('/user/my-subs')
        }else{
            setLocation('/auth/signin?callbackUrl='+`${process.env.REACT_APP_URL}`+'/paynow')
        }   
    },[])

    // useEffect(()=>{
    //     // console.log(props.bookData.Edition);
    //     if(props.bookData && !props.bookData.Edition.includes('Edition')){
    //         const ed = getEdition(props.bookData.Edition)
    //         setUpdatedEdition(props.bookData.Edition + ed + ' Edition')
    //     }
    // },[props])

    
    let isbn_10 = props.bookData.ISBN10.length === 9?'0'+props.bookData.ISBN10:props.bookData.ISBN10;

    function openAmazonAffilate() {
        let url = `https://www.amazon.com/gp/product/${isbn_10}/?tag=crazyprep-20`
        window.open(url, '_blank').focus();
    }

    return (
        <section className="section font_sz text_justify pt-5 pb-4">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-3 text-center">
                        <div className="prduct_details_img">
                            <ul>
                                <li><span><BookImage isbn={props.bookData && props.bookData.ISBN13} altText={props.altText && props.altText}/></span></li>
                                <li className="buy_with_amazon" onClick={openAmazonAffilate}><i className="fa fa-shopping-bag"></i> BUY WITH AMAZON</li>
                            </ul>
                        </div>
                    </div>

            <div className="col-md-8 ml-auto pd_b_left">
                <div className="prduct_details_text">
                    <h3>{props.bookData && (props.bookData.DisplayTitle ? props.bookData.DisplayTitle : props.bookData.BookName+' '+ props.bookData.Edition +' Solutions')}</h3>
                        <p>
                            {[...Array(props?.bookData?.ratingAv ? Math.floor(props.bookData.ratingAv) : 0)].map((e, i) => 
                                <i className="fa fa-star" key={i}></i>
                            )}
                        </p>
                            <ul className="rating">
                                <li className="pl-0 border-left-0">{props.bookData && props.bookData.ratingAv ? props.bookData.ratingAv : 0 }/5 Rating</li>
                                <li> {props.bookData && props.bookData.total} <a href="#reviews">{props.bookData && props.bookData.total == 1 ? 'Review' : 'Reviews'}</a></li>
                            </ul>
            
                            <ul className="books_wtext">
                                <li className="pl-0 border-left-0"><img src="/images/book1.jpg" className="img-fluid" alt=""/> Edition: <span>{props.bookData && props.bookData.Edition},</span></li>
                                <li><img src="/images/book2.jpg" className="img-fluid" alt=""/> Author: <span>{props.bookData && props.bookData?.Author1}{props.bookData && props.bookData?.Author2 && ","}</span><span>{props.bookData && props?.bookData.Author2}{props.bookData && props.bookData?.Author3 && ","} </span><span>{props.bookData && props.bookData?.Author3}</span></li>
                                <li><img src="/images/book3.jpg" className="img-fluid" alt=""/> ISBN: <span>{props.bookData && props.bookData.ISBN13}</span></li>
                            </ul>
                            {state.Subscribe != "true"  ? 
                            <div className="subscription-box-points">
                                <div className="book-subscription-box">
                                    <h4>$7/month
                                    <span>Subscription</span></h4>
                                </div>
                                <div className="book-subscription-box">
                                    <img src="/images/subscribe-arrow.png" className="img-fluid img" alt=""/>
                                </div>
                                <div className="book-subscription-box">
                                    <ul>
                                        <li><img src="/images/check.png" className="img-fluid" alt=""/> 797 step-by-step solutions</li>
                                        <li><img src="/images/check.png" className="img-fluid" alt=""/>  Solved by professors & experts </li>
                                        <li><img src="/images/check.png" className="img-fluid" alt=""/>  iOS, Android, & web </li>
                                    </ul>
                                </div>
                            
                                <div className="book-subscription-box">
                                    <Link to={`${location}`}><button type="submit" className="buybook_btn text-center">Get This Solutions</button></Link>
                                </div>
                            </div>
                            :''}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}