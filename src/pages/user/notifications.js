import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import BlockHeader from '../../components/website/dashboard/block-header'
import { useContext } from 'react'  
import { useQuery } from 'react-query'
import {getUser} from '../../libs/profile'
import {getNotifications} from '../../libs/question'
import moment from 'moment';
import {AuthContext} from '../../context/AuthContext';
import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { calculateTime } from '../../components/common/make-slug'
import { HashLink } from 'react-router-hash-link';

export default function Notifications(){
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;

    const isRead = 'all';
    const { data: user, isLoading:userIsLoading, error:userError } = useQuery(['user-profile'], () => getUser({email : state.email}),{initialData: undefined, staleTime : Infinity, enabled : !!session })
    const { data: notifications, isLoading:notificationsIsLoading, error:notificationsError } = useQuery([`notifications-${isRead}`], () => getNotifications({user_Id : state._id, type: 'QA'}, isRead),{ staleTime : Infinity, enabled : !!session })
    
    const [display, setDisplay] = useState();
    
    const openCollapse = (data) => {
        if(display == data){
            setDisplay('');
        }else{
            setDisplay(data);
        }
    }
    
    const gotoParticularItem = (data) => {
        console.log(data);
    }
    return(
        <>
            <DashboardNavbar data={user}/>
            <SideBar data={user}/>
            <section className="content user profile-page">
                <BlockHeader data={user} currentPage={"Notifications"}/>
                <div className="container-fluid">
                    <div className="row clearfix mt-4">
                        <div className="col-md-12">
                            <div className="card student-list">
                            <div className="header">
                                <h2><strong>My</strong> Notifications</h2>
                            </div>
                            <div className="body">
                                <div className="table-responsive tble_scrollN_fx" id="accordion">
                                    <table className="table table-hover m-b-0 my-order-new my_subscrption_table tbbl_adjst">
                                        <thead>
                                        <tr className="table_title order">
                                            <th className="">S.No</th>
                                            <th className="">Question</th>
                                            <th className="">Type</th>
                                            <th className="">Date</th>
                                            <th className="">Status</th>
                                            <th className="">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {notifications && notifications.data.map((item,key)=>{
                                                var utcDate = item.created_at;  // ISO-8601 formatted date returned from server
                                                var localDate = new Date(utcDate);
                                                var currentTime = new Date();
                                                let title = item.title
                                                return  ( 
                                                    <React.Fragment key={key}>
                                                    <tr>
                                                        <td>{key+1}</td>
                                                        <td><span dangerouslySetInnerHTML={{__html: title}}></span></td>
                                                        <td>{item.type}</td>
                                                        <td>{item.created_at.substring(0,10)}</td>
                                                        <td id={`${item.type+key}`}>{calculateTime(item.type + key, localDate.getTime(), '<span class="badge">completed</span>')}</td>
                                                        <td>
                                                            {item.type == "ASK50" ? 
                                                            <HashLink to={item.link+'#ASK50'+item.data_Id}> 
                                                                <button className="btn btn-link collapsed view-reciept-btn" data-toggle="collapse" data-target="#collapse2270" aria-expanded="false" aria-controls="collapse2270">
                                                                View
                                                                </button> 
                                                            </HashLink> :
                                                            <Link to={item.link}>
                                                                <button className="btn btn-link collapsed view-reciept-btn" data-toggle="collapse" data-target="#collapse2270" aria-expanded="false" aria-controls="collapse2270">View
                                                                </button>
                                                            </Link>}
                                                        </td>
                                                
                                                    </tr>
                                                    {/* <tr key={key}>
                                                        <td colSpan="6" style={{padding:"0px"}}>
                                                            <div className="card-header pl-0 pr-0">
                                                            <table style={{width: "100%"}}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>{key+1}</td>
                                                                        <td><span dangerouslySetInnerHTML={{__html: title}}></span></td>
                                                                        <td>{item.type}
                                                                        </td>
                                                                        <td>{item.created_at.substring(0,10)}</td>
                                                                        <td id={`${item.type+key}`}><span className="badge">{currentTime < (localDate.getTime() + 14400000) ? calculateTime(item.type + key, localDate.getTime()) : 'completed'}</span></td>
                                                                        <td><button className="btn btn-link collapsed view-reciept-btn" data-toggle="collapse" data-target="#collapse2270" aria-expanded="false" aria-controls="collapse2270" onClick={()=>{openCollapse(`collapse${key}`)}}>View</button></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                            <div id="collapse1" className="collapse accod_tab" aria-labelledby="headingTwo2270" data-parent="#accordion" style={ display == `collapse${key}` ? {display:"block"} : {display:"none"} }>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-md-8">
                                                                        <span dangerouslySetInnerHTML={{__html: item.title}}></span>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <button className="btn btn-link collapsed view-reciept-btn" data-toggle="collapse" data-target="#collapse2270" aria-expanded="false" aria-controls="collapse2270" onClick={()=>{gotoParticularItem(item.type)}} disabled={currentTime < (localDate.getTime() + 14400000)}>Open</button>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </td>
                                                    </tr> */}
                                                    </React.Fragment>
                                                    )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </>
    )
}