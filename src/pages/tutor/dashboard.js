import Header from '../../components/tutor/header'
import Sidebar from '../../components/tutor/sidebar'
import Dash from '../../components/tutor/dash'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Dashboard(){
    const router = useRouter();
    const [loggedIn,  setLoggedIn] = useState()

    useEffect(() => {
        if(localStorage.getItem('tutor_token')){
            setLoggedIn(localStorage.getItem('tutor_token'));
        }else{
            setLoggedIn(null);
        }
        console.log(loggedIn)
        if(loggedIn === null){
            router.push('/tutor/login')
        }
    },[loggedIn])
    
  

    return (
        <>
            <Header/>
            <Sidebar/>
            <Dash/>
        </>
    )
}