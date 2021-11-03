import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { getNavbarData } from '../../../libs/home'
import { signOut } from '../../../libs/auth'
import { useQuery } from 'react-query'
import { MakeSlug } from '../../common/make-slug'
import {useParams, useHistory, useLocation} from 'react-router-dom'
import {getNotifications, readNotification} from '../../../libs/question'
import {Helmet} from 'react-helmet-async'
import {AuthContext} from '../../../context/AuthContext';
import { imageUrl } from '../../../config/config';
import tawkTo from "tawkto-react";

export default function DashboardNavbar({...props}){
    const tawkToPropertyId = '5c3332467a7b8d5de7293fcb'

    // Direct Chat Link
    // https://tawk.to/chat/tawkToPropertyId/tawkToKey

    const tawkToKey = '99ad2d1fc594db8f70e110920ae1e11530800c0c'

    useEffect(() => {
        tawkTo(tawkToPropertyId, tawkToKey)
    })
    
    const history = useHistory();
    const params =  useParams();
    const [ showNotification, setShowNotification ] = useState(false);
    const [ showDropdown, setShowDropdown ] = useState(false);
    const [ classname, setClassname ] = useState('');
    const [showMenu,setShowMenu] = useState(false);
    const [showAMenu,setShowAMenu] = useState(false);
    const {state, dispatch} = useContext(AuthContext);
    const session = state.isLoggedIn;

    async function SignOut () {
        const data = await signOut()
        if(data){
            dispatch({type: 'LOGOUT'})
            history.push('/')
        }
    }

    const openNotification = () => {
        setShowNotification(true);
        setShowDropdown(false);
        setShowAMenu(false);
        setShowMenu(false);
        setClassname('show');   
    }

    const openDropdown = () => {
        setShowNotification(false);
        setShowDropdown(true);
        setShowAMenu(false);
        setShowMenu(false);
        setClassname('show');   
    }

    const openMenu = ()=>{
        setShowMenu(true);
        setShowAMenu(false);
        setShowNotification(false);
        setShowDropdown(false);
        setClassname('show');
    }

    const openMenuA = ()=>{
        setShowAMenu(true);
        setShowMenu(false);
        setShowNotification(false);
        setShowDropdown(false);
        setClassname('show');
    }

    const hideMenuA = ()=>{
        setShowAMenu(false);
        setClassname('show');
    }

    const hideDropdown = ()=>{
        setShowDropdown(false);
        setClassname('show');
    }

    const hideNotification = ()=>{
        setShowNotification(false);
        setClassname('show');
    }
  
    const hideMenu = ()=>{
        setShowMenu(false);
        setClassname('show');
    }

    const handleClick =()=>{
        hideMenu()
    }

    const openSideMenu =()=>{
        if(document.body.classList.contains('overlay-open')){
            document.querySelector("body").classList.remove("overlay-open")
        }else{
            document.querySelector("body").classList.add("overlay-open")
        }
    }

    const markAsRead = async(id,type) => {
        const res = await readNotification(id);
        let url = "";
        if(!res.error){
            if(type == "QA"){
                url = "/user/my-question";
            }
            history.push(url)
        }
    }

    const isRead = false;
    const { data, isLoading } = useQuery('menus', getNavbarData,{ staleTime:Infinity})
    const { data: notifications, isLoading:notificationsIsLoading, error:notificationsError } = useQuery([`notifications-${isRead}`], () => getNotifications({user_Id : state._id, type: 'QA'}, isRead),{ staleTime : Infinity, enabled : !!session })
    
    return( <>
            <nav className="navbar navbar_dashboard1 p-l-5 p-r-5">
                <ul className="nav navbar-nav navbar-left nav_left1 mr-auto">
                    <li>
                        <div className="navbar-header">
                            <a href="#" className="bars" onClick={openSideMenu}></a>
                            <Link to="/" className="navbar-brand"><span className="m-l-60"><img src="/images/logo.png" className="img-fluid" alt="logo" width="100"/></span></Link>
                        </div>
                    </li>      
                </ul>
   
                <ul className="nav navbar-nav navbar-left nav_right1 ml-auto">
                    <li className="dp_n">
                        <Link to="/q-and-a" className="mega-menu">Q and A</Link>           
                    </li>
                    <li className="nav-item megamenu-li dmenu dp_n" onMouseEnter={()=>{openMenu()}}>
                        <Link to="/textbook-solutions-manuals" className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual  </Link>
                        {showMenu &&
                        <div className={`dropdown-menu megamenu sm-menu border-top ${classname}`} aria-labelledby="dropdown01"  onMouseLeave={()=>hideMenu()}>
                            <div className="row">
                                {data && data.map((item,key)=>{
                                    return(  
                                        <div className={`col-sm-6 nav_pding ${key % 2 == 1 ? 'nav_sm_menu_bg' : ''} col-lg-2 border-right mb-4`} key={key}>
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
                    <li className="nav-item dmenu Writing_help_top dp_n" onMouseEnter={()=>{openMenuA()}}>
                        <Link to="/writing-help" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Writing Help
                        </Link>
                        {showAMenu && 
                        <div className={`dropdown-menu sm-menu ${classname}`} aria-labelledby="navbarDropdown" onMouseLeave={()=>hideMenuA()}>
                            <Link to="/writing-help/online-assignment-help" className="dropdown-item"><img src="/images/nav-icons/online-assignment-help.png" className="img-fluid" alt=""/> Assignment Help</Link>
                        </div>}
                    </li>
                    <li className={`nav-item dmenu float-right pt_sty dropdown ${classname}`} onMouseEnter={openDropdown}>
                    
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="my_pics_img m-r-60 mt-0"><img src={props.data && props.data.img ? (props.data.img.includes('http') ? props.data.img : imageUrl + props.data.img) : "/images/profile_av.jpg"} alt="User" className="img-fluid"/></span></a>
                        {showDropdown && <><div className={`dropdown-menu sm-menu ${classname}`} aria-labelledby="navbarDropdown" onMouseLeave={()=>{hideDropdown()}}>
                            <Link to="/dashboard" className="dropdown-item" href="#"> Dashboard</Link>
                            <Link to="/user/my-orders" className="dropdown-item" href="#"> My Orders</Link>
                            <Link to="/user/my-profile" className="dropdown-item" href="#"> My Profile</Link>
                            <a className="dropdown-item" href="#" onClick={SignOut}><i className="fas fa-sign-out-alt"></i> Logout </a>
                        </div></>}
                    </li>

                    <div className="navbar_search" style={{display:"none"}}>
                        <form className="search-form">
                            <div className="input-group ml-0 pt-0">
                                <input type="text" className="form_search_control" placeholder="Search ISBN, textbook name or homework question here"/>
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                </div>
                            </div>
                        </form><i className="fa fa-close close_btn_top"></i> 
                    </div>
                    
                    <li className={`dropdown float-right pt_sty ${classname}`}>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" onMouseEnter={()=>{openNotification()}}>
                            <i className="fa fa-bell zmdi zmdi-notifications"></i> 
                        </a>
                        <div className="notifica_numbr">
                            <span>{notifications && notifications?.data.length}</span>
                        </div>
                        {showNotification &&
                        <ul className={`dropdown-menu pullDown ${classname}`} onMouseLeave={()=>{hideNotification()}}>
                            <li className="body">
                                <ul className="menu list-unstyled notification_scroll">
                                    {notifications && notifications.data.map((item,key)=>{
                                         var date = new Date(item.created_at);
                                        return(
                                            <li key={key} onClick={()=>{markAsRead(item._id,item.type)}}>
                                               
                                                <Link to="">
                                                        <div className="media">
                                                            <img className="media-object" src="/images/pic2.png" alt=""/>
                                                            <div className="media-body">
                                                            <span className="name">{item.type} <span className="time"></span></span>
                                                            <span className="message"><span dangerouslySetInnerHTML={{__html: item.info}}></span></span>
                                                            <span style={{fontSize : "10px"}}>{date.toLocaleString()}</span>                                    
                                                            </div>
                                                        </div>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <Link to="/user/notifications"><li className="footer" href="#">View All </li></Link>
                        </ul>}
                    </li>
                    <li className="float-right search_btn_top">
                        {/* <a href="#" className="mega-menu" data-close="true"><span className=""><i className="fa fa-search"></i></span></a>            */}
                    </li> 
                </ul>
            </nav>

            <div className="chat-launcher">
            </div>

            <div className="chat-wrapper">
                <div className="card">
                    <div className="header">
                        <ul className="list-unstyled team-info margin-0">
                            <li className="m-r-15">
                                <h2> Alexander</h2>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="chat-widget">
                            <ul className="chat-scroll-list clearfix">
                                <li className="left float-left">
                                    <img src="/images/pic1.png" className="rounded-circle" alt=""/>
                                    <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br/> John <br/> What are you doing?</span></div>
                                </li>
                                <li className="right">
                                    <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br/> How are you!</span> </div>
                                </li>
                                <li className="right">
                                    <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                                </li>
                                <li className="left float-left">
                                    <img src="/images/pic1.png" className="rounded-circle" alt=""/>
                                    <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br/> John <br/> What are you doing?</span> </div>
                                </li>
                                <li className="left float-left">
                                    <img src="/images/pic2.png" className="rounded-circle" alt=""/>
                                    <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                                </li>
                                <li className="right">
                                    <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br/>Michael</span> </div>
                                </li>
                            </ul>
                        </div>
                        <div className="input-group p-t-15">
                            <input type="text" className="form-control" placeholder="Enter text here..."/>
                            <span className="input-group-addon"><i className="zmdi zmdi-mail-send"></i></span>
                        </div>
                    </div>
                </div>
            </div>
	  </>
    )
}