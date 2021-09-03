import Header from '../../components/tutor/header'
import ProfileSection from '../../components/tutor/profile-section'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function ProfileDetails(){
    // const history = useHistory();
    // const [loggedIn,  setLoggedIn] = useState()

    // useEffect(() => {
    //     if(localStorage.getItem('tutor_token')){
    //         setLoggedIn(localStorage.getItem('tutor_token'));
    //     }else{
    //         setLoggedIn(null);
    //     }
    //     console.log(loggedIn)
    //     if(loggedIn === null){
    //         router.push('/tutor/login')
    //     }
    // },[loggedIn])

    useEffect(() => { 
		// if(history.location.pathname.includes('profile-details')) 
        // {
        //     document.querySelector("body").classList.add("theme-blush","ls-toggle-menu")
        // }
	});

    return(
        <>
             <Header />
            {/*<ProfileSection /> */}
        </>
    )
}