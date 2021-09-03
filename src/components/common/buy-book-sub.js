import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import {AuthContext} from '../../context/AuthContext';

export default function BuyBookSub({...props}){
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
    // console.log("code commented in buy-book-sub.js")

    return(
        <div className="btn1">
            <Link to={`${location}`} className={props.classname}>{props.text}</Link>
        </div>
    )
}