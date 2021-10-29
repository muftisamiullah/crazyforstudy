import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import BlockHeader from '../../components/website/dashboard/block-header'
import SideBar from '../../components/website/dashboard/sidebar'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import {useState ,useEffect,useContext, useRef} from 'react'
import { useQuery } from 'react-query'
import {getCountries, getUser, editUserProfile, updatePass} from '../../libs/profile'
// import { signIn } from 'next-auth/client'
import {AuthContext} from '../../context/AuthContext';
import {capitalize} from '../../components/common/make-slug';
import DatePicker from "react-datepicker";
import { imageUrl as imageUrl1} from '../../config/config'

export default function  MyProfile() {
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;

    const [startDate, setStartDate] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [preview, setPreview] = useState();
    const [defaultImage, setDefaultImage] = useState("/images/profile_av.jpg");
    const [loader, setLoader ] = useState()
    const [loader1, setLoader1 ] = useState()
    const [display, setDisplay ] = useState('none')
    const [error, setError] = useState();
    const [msg, setMsg] = useState();
    const [passData, setPassData] = useState({
        pass: '',
        confirmPass: '',
    })

    const [formData, setFormData] = useState({
        Name: '',
        dob:'',
        Country: '',
        Zipcode: '',
        Address: '',
        college: '',
        Contact: '',
        img:"",
    });

    const { data: user, isLoading:userIsLoading, error:userError } = useQuery(['user-profile'], () => getUser({email:state.email}),{initialData: undefined,staleTime:Infinity, enabled: !!session})
    const { data: countries, isLoading:countriesIsLoading, error:countriesError } = useQuery(['country-list'], () => getCountries(),{staleTime:Infinity})

    useEffect(()=>{
        if(user){
            setFormData({
                ...formData,
                ['Name']: user.Name,
                ['email']: user.Email,
                ['Country']: user.Country,
                ['dob']: user.dob,
                ['Zipcode']: user.Zipcode,
                ['Address']: user.Address,
                ['college']: user.college,
                ['Contact']: user.Contact,
                ['img']: user.img,
            });
            if(user && user.dob != undefined && user.dob != ""){
                setStartDate(new Date(user?.dob))
            }
        }
    },[user])

    async function SignOut () {
        localStorage.removeItem('access_token_student')
        localStorage.removeItem('refresh_token_student')
        localStorage.removeItem('student_name')
        localStorage.removeItem('student_email')
        // Router.push('login')
        // signOut({ callbackUrl: 'http://localhost:3000/auth/signin' });
        // const data = await signOut({redirect: false, callbackUrl: "/auth/signin"})
        // history.push(data.url)
    }

    //other way of doing the same thing without returning some component
    // const isUser = !!session?.user
    // useEffect(() => {
    //     if (loading) return 
    //     if (!isUser) signIn() 
    // }, [isUser, loading])

    const handleProfile = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const saveForm = async (e) => {
        setLoader(true);
        setFormData({ ...formData, ['email']: state.email})
        let form = new FormData();
        form.append('Name',formData.Name);
        form.append('Country',formData.Country);
        form.append('dob',startDate);
        form.append('Zipcode',formData.Zipcode);
        form.append('Address',formData.Address);
        form.append('college',formData.college);
        form.append('Contact',formData.Contact);
        form.append('email',formData.email);
        form.append('file', imageUrl);
        const res = await editUserProfile(form);
        if(res){
            
        }setLoader(false)
    }

    const openChangePassword = () => {
        if(display == 'block'){
            setDisplay('none')
        }else{
            setDisplay('block')
        }
    }

    const uploadImage = () => {
        document.getElementById('file-up2').click();
    }

    const onSelectFile = (e) => {
        if(e.target.files[0].name.slice(-3) == "png" || e.target.files[0].name.slice(-3) == "jpg" || e.target.files[0].name.slice(-3) == "jpeg"){
            setImageUrl(e.target.files[0])
            setFormData({...formData, ['img']: null})
        }        
    }

    const changeImage = (e) => {
        // setImageUrl(e.target.src)
    }

    useEffect(() => {
        if (!imageUrl) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(imageUrl)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [imageUrl])

    const changeP = (e) => {
        setPassData({
            ...passData,
            [e.target.name]: e.target.value,
            id:localStorage.getItem('_id')
        });
    }

    const updatePassword = async() => {
        setLoader1(true);
        if(passData.pass.length < 8){
            setError('Password must not be less than 8 characters')
            return;
        }
        if(passData.pass == "" || passData.confirmPass == ""){
            setError('Both fields necessary')
            return
        }
        if(passData.pass !== passData.confirmPass){
            setError('Password mismatch')
            return
        }
        const res = await updatePass(passData);
        if(res.status == 200){
            setLoader1(false)
            setMsg('Password updated successfully')
        }else{
            setLoader1(false)
        }
    }

    useEffect(() => {
		let timerError = setTimeout(() => {setError('');setMsg('')}, 3000);
		return () => {
			clearTimeout(timerError);
		}
	}, [error, msg])
    
    return (
        <>
            <DashboardNavbar data={formData}/>
            <SideBar data={formData}/>
            {/* <aside id="leftsidebar" className="sidebar">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><Link to="/dashboard" className="nav-link" data-toggle="tab" href="" target="_blank"><i className="zmdi zmdi-home"></i></Link></li>
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#user">Profile</a></li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane stretchLeft active" id="user">
                    <div className="menu">
                        <ul className="list">
                            <li>
                                <div className="user-info m-b-20 p-b-15">
                                    <div className="image circle">
                                    <img src={formData.img ? (formData.img.includes('http') ? formData.img : imageUrl1 + formData.img)  : (preview) ? preview : defaultImage} className="profile-pic circle" alt="User"/>
                                    
                                <div className="profile_pic_change">
                                <div className="p-image" >
                                    <i className="fa fa-camera upload-button" ></i>
                                    <input className="file-upload" type="file" accept="image/*"/>
                                </div>
                                </div>
                            </div>
                                <div className="detail">
                                    <h4>{formData && formData.Name}</h4>
                                </div>
                                </div>
                            </li>
                            <li>
                                <small className="text-muted">Location: </small>
                                <p>{formData && capitalize(formData?.Country)}</p>
                                <hr/>
                                <small className="text-muted">Email address: </small>
                                <p>{formData && formData.email}</p>
                                <hr/>
                                <small className="text-muted">Phone: </small>
                                <p>{formData && formData.Contact}</p>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </aside> */}
            <section className="content user profile-page">
                <BlockHeader data={formData} currentPage="My Profile"/>
                {/* <div className="block-header">
                    <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h2>Profile
                            <small>Welcome to All Assignment Services</small>
                        </h2>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <ul className="breadcrumb float-md-right">
                            <li className="breadcrumb-item"><Link to="/dashboard"><a> Dashboard</a></Link></li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ul>
                    </div>
                    </div>
                </div> */}
        	    {/* <div class="row clearfix" id="successfully" style={{display:"block"}}>
                    <div class="col-lg-12 col-md-12">
                    <div class="congratulation_text text-center">
                        <img src="/images/like.png" class="img-fluid" alt=""/>
                        <h4  class="modal-title text-center">Password Changed Successfully </h4>
                        </div>
                    </div>
                </div> */}
                <div className="container-fluid">
                    <div className="row clearfix mt-4">
                    <div className="col-lg-4 col-md-12">
                        <div className="card profile-header img-f">
                            <div className="body text-center">
                                    <div className="profile-image">
                                        <div className="user-info">
                                            <div className="image circle">
                                                <img src={formData.img ? (formData.img.includes('http') ? formData.img : imageUrl1 + formData.img)  : (preview) ? preview : defaultImage} className="profile-pic circle" alt="User"/>
                                            </div>
                                            <div className="profile_pic_change">
                                                <div className="p-image p-image2">
                                                    <i className="fa fa-camera upload-button" onClick={uploadImage}></i>
                                                    <input className="file-upload" type="file" accept="image/*" id="file-up2" onChange={onSelectFile}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <h4>{formData && formData.Name}</h4>
                                        </div>
                                    </div>
                                <div>
                                {/* <!--<div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <form action="/file-upload" className="dropzone">
                                            <div className="dz-message">
                                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                            <p>click to upload image</p>
                                            </div>
                                            <div className="fallback">
                                            <input name="file" type="file" multiple />
                                            </div>
                                        </form>
                                    </div>
                                    </div>--> */}
                                <div className="tab-pane body" id="friends">
                                    <ul className="new_friend_list list-unstyled row">
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic1.png" className="img-thumbnail" alt="User Image" onClick={changeImage}/>
                                            </a>
                                        </li>
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic2.png" className="img-thumbnail" alt="User Image" onClick={changeImage}/>
                                            </a>
                                        </li>
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic3.png" className="img-thumbnail" alt="User Image" onClick={changeImage}/>
                                            </a>
                                        </li>
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic4.png" className="img-thumbnail" alt="User Image" onClick={changeImage}/>
                                            </a>
                                        </li>
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic5.png" className="img-thumbnail" alt="User Image" onClick={changeImage}/>
                                            </a>
                                        </li>
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic6.png" className="img-thumbnail" alt="User Image" onClick={changeImage}/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            {/* <ul className="nav nav-tabs profile_editbtn">
                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Account"><i className="fa fa-edit"></i></a></li>
                            </ul> */}
                            
                            <ul className="nav nav-tabs profile_editbtn">
                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Account">Personal Details</a></li>
                                <li className="nav-item">
                                    {/* <a className="nav-link " href=""><i className="zmdi zmdi-edit"></i></a> */}
                                    </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane body active" id="Account">
                                {/* <!--<div className="form-group">
                                    <input type="password" className="form-control" placeholder="Current Password">
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="New Password">
                                </div> --> */}
                                <button className="btn btn-info btn-round" id="changepass" onClick={openChangePassword}> Changes Password</button>
                                <div style={{display:`${display}`}}>
                                <div className="row clearfix" id="changepass2" >
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>New Password</label>
                                            <input type="password" className="form-control" name="pass" placeholder="New Password" onChange={changeP}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Confirm Password</label>
                                            <input type="password" className="form-control" name="confirmPass" placeholder="Confirm Password" onChange={changeP}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <span style={{color:"red"}}>{error}</span>
                                        <span style={{color:"green"}}>{msg}</span>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary btn-round" id="successProfileUpdatebtn" onClick={updatePassword}>{loader1 ? "Updating": "Update Password"}</button>
                                    </div>
                                    </div>
                                    </div>

                                <hr/>

                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Name</label>
                                            <input type="text" className="form-control" name="Name" placeholder="first name" onChange={handleProfile} defaultValue={formData && formData.Name}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <div className="customDatePickerWidth">
                                                <label>DOB</label>
                                                {/* <input type="text" className="form-control" name="dob" placeholder="Enter Your Date of Birth" onChange={handleProfile} defaultValue={formData && formData.dob}/> */}
                                                <DatePicker className="form-control" required selected={startDate}  name="dob" onChange={date => setStartDate(date)} defaultValue={formData && formData.dob}/>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Email Id</label>
                                            <input type="text" className="form-control" placeholder="email" defaultValue={formData && formData.email} readOnly/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>College</label>
                                            <input type="text" className="form-control" name="college" placeholder="College name" defaultValue={formData && formData.college} onChange={handleProfile}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Phone no</label>
                                            <input type="text" className="form-control" name="Contact" placeholder="phone no" defaultValue={formData && formData.Contact}  onChange={handleProfile}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Address</label>
                                            <input type="text" className="form-control" name="Address" placeholder="Address" defaultValue={formData && formData.Address}  onChange={handleProfile}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Zipcode</label>
                                            <input type="text" className="form-control" name="Zipcode" placeholder="Zipcode" defaultValue={formData && formData.Zipcode}  onChange={handleProfile}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Country</label>
                                        <select name="education" required className="form-control" name="Country"  onChange={handleProfile} value={formData && formData.Country}>
                                            <option value="">Select Country</option>
                                            {countries && countries.map((item,key)=>{
                                                return (
                                                    <option key={key} value={item.slug}>{item.title}</option>
                                                )
                                            })}
                                            </select>
                                        </div>
                                    </div>

                                    {/* <!--  <div className="col-md-12">
                                        <div className="checkbox">
                                            <input id="procheck2" type="checkbox"/>
                                            <label for="procheck2">New task notifications</label>
                                        </div>
                                    </div>--> */}
                                    <div className="col-md-12">
                                        <button onClick={saveForm} className="btn btn-primary btn-round" >{loader ? "updating" : "Update"}</button>
                                    </div>
                                </div>
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