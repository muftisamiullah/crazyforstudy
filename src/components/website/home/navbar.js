import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getNavbarData } from '../../../libs/home'
import { useQuery } from 'react-query'
import { MakeSlug } from '../../common/make-slug'
import {AuthContext} from '../../../context/AuthContext';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
    const location = useLocation();
    const [showMenu,setShowMenu] = useState(false);
    const [showAMenu,setShowAMenu] = useState(false);
    const [classname, setClassname] = useState('');
    const [mobileMenuClass, setMobileMenuClass] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const {state} = useContext(AuthContext);
    const session = state.isLoggedIn;

    const showMobileMenu = ()=>{
        if(mobileMenuClass === 'show'){
            setMobileMenuClass('')
        }else{
            setMobileMenuClass('show')
        }
    }

    const handleClick =()=>{
        hideMenu()
    }

    const openMenu = ()=>{
        setShowMenu(true);
        setShowAMenu(false);
        setClassname('show');
    }

    const openMenuMobile = ()=>{
        if(showMenu == true){
            setShowMenu(false);
            setClassname('');
        }else{
            setShowMenu(true);
            setShowAMenu(false);
            setClassname('show');
        }
    }

    const openMenuAMobile = ()=>{
        if(showAMenu == true){
            setShowAMenu(false);
            setClassname('');
        }else{
            setShowAMenu(true);
            setShowMenu(false);
            setClassname('show');
        }
    }

    const openMenuA = ()=>{
        setShowAMenu(true);
        setShowMenu(false);
        setClassname('show');
    }

    const openMenuB = () =>{
        setShowAMenu(false);
        setShowMenu(false);
    }

    const hideMenuA = ()=>{
        setShowAMenu(false);
        setClassname('show');
    }

    const hideMenu = ()=>{
        setShowMenu(false);
        setClassname('show');
    }
    
    const [homePClass, setHomePClass] = useState('');
    const [homePImage, setHomePImage] = useState('logo.png');
    
    useEffect(() => {
        if(location.pathname !== '/' && location.pathname !== '/paynow'){
            setHomePClass('bg_white_nav')
            setHomePImage('logo_w.jpg')
        }
        return () => {
        }
    })    

    //

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
		if(window.innerWidth < 991){
            setIsMobile(true)
		}else{
            setIsMobile(false)
        }
	}

	useEffect(() => {
			if(width < 991){
                setIsMobile(true)
			}else{
                setIsMobile(false)
            }
			window.addEventListener('resize', handleWindowSizeChange);
			return () => {
				window.removeEventListener('resize', handleWindowSizeChange);
			}
	}, []);
    //
    const { data, isLoading } = useQuery('menus', getNavbarData, {staleTime:Infinity,cacheTime:1000*60*60,refetchOnWindowFocus: false,refetchOnMount:false })
    
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${homePClass}`}>
            <div className="container">
                <Link to="/" className="navbar-brand"><img src={`/images/${homePImage}`} className="img-fluid" alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={showMobileMenu} data-target="#mobile_nav" aria-controls="mobile_nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> 
                </button>
                <div className={`collapse navbar-collapse ${mobileMenuClass}`} id="mobile_nav">

                {/* <ul className="navbar-nav navbar-light ml-auto"> */}
                {isMobile ? 
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/q-and-a" className="nav-link">Q and A
                        </Link>
                    </li>  
                    <li className="nav-item dropdown megamenu-li dmenu" onClick={()=>{openMenuMobile()}} >
                        <Link to="#" className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual  </Link>
                        {showMenu &&
                        <div className={`dropdown-menu megamenu sm-menu border-top ${classname}`}>
                            <Link to="/textbook-solutions-manuals" className="dropdown-item">Solutions Manual  </Link>
                            <div className="row">
                                {data && data.map((item,key)=>{
                                    return(  
                                        <div className={`col-sm-6 nav_pding ${key % 2 == 1 ? 'nav_sm_menu_bg' : ''} col-lg-2 border-right mb-4`} key={key}>
                                            {/* <h6>{item.subject} <img src={`/images/nav-icons/${item.subject.toLowerCase().replace(/ /g,"-")}.png`} className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6> */}
                                            <Link to={`/textbook-solutions-manuals/${MakeSlug(item.subject)}`}><h6>{item.subject} <img src={`/images/nav-icons/${MakeSlug(item.subject)}.png`} className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6></Link>
                                            {item.sub_subject.map((it,key)=>{
                                                return <Link to={`/textbook-solutions-manuals/${MakeSlug(item.subject)+'/'+MakeSlug(it.sub_subject)}`} key={key} className="dropdown-item" onClick={handleClick}>{it.sub_subject}</Link>
                                                // return <Link to={{pathname:`${'textbook-solutions-manuals/'+item.subject.toLowerCase().replace(/ /g,"-")+'/'+it.sub_subject.toLowerCase().replace(/ /g,"-")}`}} key={key}><a className="dropdown-item">{it.sub_subject}</a></Link>
                                                // return <Link to={{pathname: 'textbook-solutions-manuals', query: {subject: item.subject.toLowerCase().replace(/ /g,"-"), sub_subject_name:it.sub_subject.toLowerCase().replace(/ /g,"-")} }} key={key}><a className="dropdown-item">{it.sub_subject}</a></Link>
                                            })}
                                        </div> 
                                    )
                                })}
                            </div>
                        </div>
                        }
                    </li> 
                    <li className="nav-item dmenu dropdown" onClick={()=>{openMenuAMobile()}}>
                        <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Writing Help
                        </Link>
                        {showAMenu && <>
                        <Link to="/writing-help" className="dropdown-item">Writing Help  </Link>
                        <div className={`dropdown-menu sm-menu ${classname}`} aria-labelledby="navbarDropdown">
                            <Link to="/writing-help/online-assignment-help" className="dropdown-item"><img src="/images/nav-icons/online-assignment-help.png" className="img-fluid" alt=""/> Assignment Help </Link>
                        </div></>}
                    </li>
                    {session !== undefined && !session 
                    ?
                    <li className="nav-item login_signup_top"><Link to="/auth/signin" className="nav-link">Login / Signup <i className="fa fa-user"></i></Link></li>
                    : 
                    <li className="nav-item login_signup_top"><Link to="/dashboard" className="nav-link">My Profile <i className="fa fa-user"></i></Link></li>
                    } 
                </ul>
                :
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" onMouseEnter={()=>{openMenuB()}}>
                        <HashLink to="/q-and-a#subjects" className="nav-link">Q and A
                        </HashLink>
                        
                    </li>  
                    <li className="nav-item dropdown megamenu-li dmenu" onMouseEnter={()=>{openMenu()}} >
                        <Link to="/textbook-solutions-manuals" className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual  </Link>
                        {showMenu &&
                        <div className={`dropdown-menu megamenu sm-menu border-top ${classname}`}   onMouseLeave={()=>hideMenu()}>
                            <div className="row">
                                {data && data.map((item,key)=>{
                                    return(  
                                        <div className={`col-sm-6 nav_pding ${key % 2 == 1 ? 'nav_sm_menu_bg' : ''} col-lg-2 border-right mb-4`} key={key}>
                                            {/* <h6>{item.subject} <img src={`/images/nav-icons/${item.subject.toLowerCase().replace(/ /g,"-")}.png`} className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6> */}
                                            <Link to={`/textbook-solutions-manuals/${MakeSlug(item.subject)}`}><h6>{item.subject} <img src={`/images/nav-icons/${MakeSlug(item.subject)}.png`} className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6></Link>
                                            {item.sub_subject.map((it,key)=>{
                                                return <HashLink to={`/textbook-solutions-manuals/${MakeSlug(item.subject)+'/'+MakeSlug(it.sub_subject)}`} key={key} className="dropdown-item" onClick={handleClick}>{it.sub_subject}</HashLink>
                                                // return <Link to={{pathname:`${'textbook-solutions-manuals/'+item.subject.toLowerCase().replace(/ /g,"-")+'/'+it.sub_subject.toLowerCase().replace(/ /g,"-")}`}} key={key}><a className="dropdown-item">{it.sub_subject}</a></Link>
                                                // return <Link to={{pathname: 'textbook-solutions-manuals', query: {subject: item.subject.toLowerCase().replace(/ /g,"-"), sub_subject_name:it.sub_subject.toLowerCase().replace(/ /g,"-")} }} key={key}><a className="dropdown-item">{it.sub_subject}</a></Link>
                                            })}
                                        </div> 
                                    )
                                })}
                            </div>
                        </div>
                        }
                    </li> 
                    <li className="nav-item dmenu dropdown" onMouseEnter={()=>{openMenuA()}}>
                        <Link to="/writing-help" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Writing Help
                        </Link>
                        {showAMenu && 
                        <div className={`dropdown-menu sm-menu ${classname}`} aria-labelledby="navbarDropdown" onMouseLeave={()=>hideMenuA()}>
                            <Link to="/writing-help/online-assignment-help" className="dropdown-item"><img src="/images/nav-icons/online-assignment-help.png" className="img-fluid" alt=""/> Assignment Help </Link>
                        </div>}
                    </li>
                    {session !== undefined && !session 
                    ?
                    <li className="nav-item login_signup_top"><Link to="/auth/signin" className="nav-link">Login / Signup <i className="fa fa-user"></i></Link></li>
                    : 
                    <li className="nav-item login_signup_top"><Link to="/dashboard" className="nav-link">My Profile <i className="fa fa-user"></i></Link></li>
                    } 
                </ul>}
                </div>
            </div>
        </nav> 
        </>
    )
}
  