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
    const [list, setList] = useState(0);
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

    const openMenuMobile = (e)=>{
        e.stopPropagation();
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
    
    const openSubMenuMobile = (e,key) => {
        e.stopPropagation();
        if(subMenu === "show"){
            setList(999)
            setSubMenu('');
        }
        setList(key)
        setSubMenu('show');
    }

    const openSubMenu = (key) => {
        setList(key)
        setSubMenu('show');
    }

    const [homePClass, setHomePClass] = useState('');
    const [homePImage, setHomePImage] = useState('logo.png');
    const [subMenu, setSubMenu] = useState('');
    
    useEffect(() => {
        if(location.pathname !== '/' && location.pathname !== '/paynow'){
            setHomePClass('bg_white_nav')
            setHomePImage('logo_w.jpg')
        }
        return () => {
        }
    })    

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

    const { data, isLoading } = useQuery('menus', getNavbarData, {staleTime:Infinity,cacheTime:1000*60*60,refetchOnWindowFocus: false,refetchOnMount:false })
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${homePClass}`}>
            <div className="container">
                <Link to="/" className="navbar-brand"><img src={`/images/${homePImage}`} className="img-fluid" alt="logo"/></Link>
                <button className={"navbar-toggler " + (mobileMenuClass == "show" ? "" :  "collapsed")} type="button" data-toggle="collapse" data-target="#navbarSupportedContent"  onClick={showMobileMenu} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 
                <div className={`collapse navbar-collapse ${mobileMenuClass}`} id="navbarSupportedContent">
                {isMobile ? 
                    <ul className="navbar-nav solu_nav ml-auto">
                        <li className="nav-item">
                            <HashLink to="/q-and-a#subjects" className="nav-link">Q and A
                            </HashLink>
                        </li> 
                        <li className={`nav-item dropdown ${classname}`} onClick={(e)=>{openMenuMobile(e)}}>
                            <a href="#" className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual  </a>
                            {/* <HashLink to="/textbook-solutions-manuals#solution-manuals" className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual  </HashLink> */}
                            {showMenu &&
                            <ul className={`dropdown-menu dropdownmenu_main ${classname}`} aria-labelledby="navbarDropdown" onMouseLeave={()=>hideMenu()}>
                                    <HashLink to="/textbook-solutions-manuals#solution-manuals" className="dropdown-item" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual  </HashLink>
                                    {data && data.map((item,key)=>{
                                        return(<li className="dropright" key={key}>
                                            <a className={"dropdown-item " + (list === key ? 'active' : '')} data-toggle="dropdown" href="#" onClick={(e)=>{openSubMenuMobile(e,key)}}>
                                                <h6><img src={`/images/nav-icons/${MakeSlug(item.subject)}.png`} className="img-fluid" alt=""/> {item.subject} <i className="fa fa-angle-right"></i></h6>
                                            </a> 
                                            <div className={"dropdown-menu dropdown_main2 " + (list === key ? 'show' : '')}> 
                                                <HashLink to={`/textbook-solutions-manuals/${MakeSlug(item.subject)}`} className="dropdown-item">{item.subject}</HashLink>
                                                {item.sub_subject.map((it,key)=>{
                                                    return(
                                                        <HashLink to={`/textbook-solutions-manuals/${MakeSlug(item.subject)+'/'+MakeSlug(it.sub_subject)}`} key={key} className="dropdown-item" ><i className="fa fa-circle"></i> {it.sub_subject}</HashLink>
                                                    )
                                                })}
                                            </div>
                                        </li>)
                                    })}
                            </ul>}
                        </li>
                        <li className="nav-item dropdown dropdown_reltv" onClick={()=>{openMenuAMobile()}}>
                            <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Writing Help
                            </a>
                            {showAMenu && 
                            <div className={`dropdown-menu sm-menu ${classname}`} aria-labelledby="navbarDropdown">
                                <Link to="/writing-help/online-assignment-help" className="dropdown-item"><img src="/images/nav-icons/online-assignment-help.png" className="img-fluid" alt=""/> Assignment Help </Link>
                            </div>}
                        </li>
                        {session !== undefined && !session 
                            ?
                            <li className="nav-item login_signup_top"><Link to="/auth/signin" className="nav-link">Login / Signup <i className="fa fa-user"></i></Link></li>
                            : 
                            <li className="nav-item login_signup_top"><Link to="/user/my-profile" className="nav-link">My Profile <i className="fa fa-user"></i></Link></li>
                        } 
                    </ul>
                    :
                    <ul className="navbar-nav solu_nav ml-auto">
                        <li className="nav-item" onMouseEnter={()=>{openMenuB()}}>
                            <HashLink to="/q-and-a#subjects" className="nav-link">Q and A
                            </HashLink>
                        </li> 
                        <li className={`nav-item dropdown ${classname}`} onMouseEnter={()=>{openMenu()}}>
                            <HashLink to="/textbook-solutions-manuals#solution-manuals" className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual  </HashLink>
                            {showMenu &&
                            <ul className={`dropdown-menu dropdownmenu_main ${classname}`} aria-labelledby="navbarDropdown" onMouseLeave={()=>hideMenu()}>
                                    {data && data.map((item,key)=>{
                                        return(<li className="dropright" key={key}>
                                            <Link className={"dropdown-item " + (list === key ? 'active' : '')} data-toggle="dropdown" to={`/textbook-solutions-manuals/${MakeSlug(item.subject)}`} onMouseEnter={()=>{openSubMenu(key)}}>
                                                <h6><img src={`/images/nav-icons/${MakeSlug(item.subject)}.png`} className="img-fluid" alt=""/> {item.subject} <i className="fa fa-angle-right"></i></h6>
                                            </Link> 
                                            <div className={"dropdown-menu dropdown_main2 " + (list === key ? 'show' : '')}> 
                                                {item.sub_subject.map((it,key)=>{
                                                    return(
                                                        <HashLink to={`/textbook-solutions-manuals/${MakeSlug(item.subject)+'/'+MakeSlug(it.sub_subject)}`} key={key} className="dropdown-item" onClick={handleClick}><i className="fa fa-circle"></i> {it.sub_subject}</HashLink>
                                                    )
                                                })}
                                            </div>
                                        </li>)
                                    })}
                            </ul>}
                        </li>
                        <li className="nav-item dropdown dropdown_reltv" onMouseEnter={()=>{openMenuA()}}>
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
                            <li className="nav-item login_signup_top"><Link to="/user/my-profile" className="nav-link">My Profile <i className="fa fa-user"></i></Link></li>
                        } 
                    </ul>
                }
                </div>
            </div>
        </nav>
    )
}
  