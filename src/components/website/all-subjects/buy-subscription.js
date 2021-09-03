import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import {AuthContext} from '../../../context/AuthContext';

export default function BuySubscription(){
    const [ location, setLocation ] = useState('/');
    const { state } = useContext(AuthContext);

    useEffect(()=>{
        if(state.Subscribe != "true"){
            setLocation('/paynow')
        }else if(state.Subscribe == "true"){
            setLocation('/user/my-subs')
        }else{
            setLocation('/auth/signin?callbackUrl='+`${process.env.REACT_APP_URL}`+'/paynow')
        }   
    },[])

    return(
        <section className="section bg_color_assignment pt-3 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <div className="">
                            <h2 className="font-30 mb-0 pt-1">Need your assignment help? </h2> 
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="anytime_subscribe">
                            <ul>
                                <li> <span>$7.00</span> / a month. Cancel anytime </li>
                                <li> <Link to={`${location}`}>Subscribe now</Link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}