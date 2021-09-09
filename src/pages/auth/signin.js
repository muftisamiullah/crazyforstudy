import { useRef, useState, useContext } from 'react';
import NewNavbar from '../../components/common/new-navbar-login-signup'
import {useEffect} from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {sendResetEmail, verifyOtp, changePassword} from '../../libs/auth'
import { setLogin, saveGoogleUser } from '../../libs/auth'
import {AuthContext} from '../../context/AuthContext';
import GoogleLogin from 'react-google-login';

export default function SignIn({ csrfToken, providers }) {
	
	const [success, setSuccess] = useState(null);
	const [loader, setLoader] = useState(false);
	const [disabled, setDisabled] = useState(false)
	const [error, setError] = useState(null);
	const [userid, setUserId] = useState(null);
	const [whichSegment, setWhichSegment] = useState('signin');
	const [otp, setOtp] = useState();
	const [checkedState, setCheckedState] = useState(true);
	const [openPassword, setOpenPassword] = useState('password');

	const { dispatch, state } = useContext(AuthContext);
	const [code, setCode] = useState({
		1: "",
		2: "",
		3: "",
		4: "",
	  });

	const emailRef = useRef();
	const passwordRef = useRef();
	const forgotEmailRef = useRef();
	const chPRef = useRef();
	const conchPRef = useRef();
 	
	useEffect(() => {
		// console.log(session)
		// if (session && session.expires){
		// 	Router.push('/dashboard')
		// }
	}, [])

	useEffect(() => {
		let timerError = setTimeout(() => setError(''), 3000);
		return () => {
			clearTimeout(timerError);
		}
	}, [error])

	let redirectUrl = `${process.env.REACT_APP_URL}/dashboard`;
	// console.log('redirect-url',redirectUrl);
	useEffect(() => {
		const url = new URL(window.location.href);
		if(url.searchParams.get("callbackUrl") != null){
			redirectUrl = url.searchParams.get("callbackUrl")
		};
	});

	const submitForm = async (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		if(email === ''){
			setError("Please enter email address");
			return false;
		}else if(password === ''){
			setError("Please enter password");
			return false;
		}else{
			setLoader(true);
			const response = await setLogin({ email:email, password:password });
			if(response == 401){
				setError("Email or password not matched");
				setLoader(false);
			}else{
				let access_token = response.accessToken
                let refresh_token = response.refreshToken
                let fullname = response.student.Name
                let email = response.student.Email
                let role = response.student.role
                let created_at = response.student.created_at
                let _id = response.student._id
                let Subscribe = response.student.Subscribe
                
                let isLoggedIn = true;
                localStorage.setItem('access_token', access_token)
                localStorage.setItem('refresh_token', refresh_token);
                localStorage.setItem('fullname', fullname);
                localStorage.setItem('email', email);
                localStorage.setItem('role', role);
                localStorage.setItem('created_at', created_at);
                localStorage.setItem('isLoggedIn', isLoggedIn);
                localStorage.setItem('_id', _id);
                localStorage.setItem('Subscribe', Subscribe);
                const payloadData = {
                    isLoggedIn,
                    fullname,
                    email,
                    role,
                    created_at,
                    access_token,
                    refresh_token,
					_id,
					Subscribe,
                }
                if(isLoggedIn){
                    dispatch({type: 'LOGIN', payload: payloadData});
                    emailRef.current.value = ''
                    passwordRef.current.value = ''
                    window.location.href = redirectUrl;
                }
			}
		}
	}

	const forgot = (e) =>{
		setWhichSegment('email-link')
	}

	const agreePolicy = (e)=>{
		console.log(e.target.checked)
		if(e.target.checked){
			setCheckedState(true)
			setDisabled(false);
		}else{
			setCheckedState(false)
			setDisabled(true);
		}
	}

	const sendForgotEmail = async (e) =>{
		e.preventDefault();
		const email = forgotEmailRef.current.value;
		const res = await sendResetEmail(email);
		if(res.status == 200){
			setWhichSegment('otp');
			setError("Reset Code Sent to your Email Id");
		}else{
			setError("User Email not Found");
		}
	}
	const onchangeReset = (e) =>{
		setCode({...code , [e.target.name] : e.target.value})
	}

	const handleResetCode = async (e) =>{
		e.preventDefault();
		setOtp(code['1']+code['2']+code['3']+code['4'])
		const res = await verifyOtp(otp);
		if(res.status == 200){
			setUserId(res.data.userId);
			setWhichSegment('change-p');
			setError("OTP matched");
		}else{
			setError("otp doesnt match");
		}
	}

	const changePasswordT = async(e) =>{
		e.preventDefault();
		const changeP = chPRef.current.value;
		const confirmchangeP = conchPRef.current.value;
		var n = changeP.localeCompare(confirmchangeP);
		if(n != 0){
			setError('password mismatch')
		}else{
			const res =  await changePassword(changeP, userid, otp)
			if(res.status == 200){
				setWhichSegment('success');
				setError("password chnaged successfully");
			}else{
				setError("password couldnt be changed");
			}
		}
	}

	const setSignin = async()=>{
		setWhichSegment('signin')
	}

	const showPassword = () => {
		if(openPassword == "name"){
			setOpenPassword('password')
		}else{
			setOpenPassword('name')
		}
		
	}

	const responseGoogle = async (response) => {
		console.log("in google signin")
		let user = {};
		user.Name = response?.profileObj?.name;
		user.img = response?.profileObj?.imageUrl;
		user.social_id = response?.profileObj?.googleId;
		user.Email = response?.profileObj?.email;
		const res = await saveGoogleUser(user);
		if(res && res.status == 200) {
            console.log("user created")
			let access_token = res.data.accessToken
			let refresh_token = res.data.refreshToken
			
			let isLoggedIn = true;
			localStorage.setItem('access_token', access_token)
			localStorage.setItem('refresh_token', refresh_token)
			localStorage.setItem('fullname', user.Name);
			localStorage.setItem('email', user.Email);
			localStorage.setItem('img', user.img);
			localStorage.setItem('social_id', user.social_id);
			localStorage.setItem('Subscribe', res.data.student.Subscribe);
			localStorage.setItem('_id', res.data.student._id);

			let email = user.Email
			let fullname = user.Name
			let Subscribe = res.data.student.Subscribe
			let img = user.img
			let role = res.data.student.role
			let created_at = res.data.student.created_at
			let _id = res.data.student._id

			const payloadData = {
				isLoggedIn,
				fullname,
				email,
				role,
				created_at,
				access_token,
				_id,
				Subscribe,
				img
			}
			if(isLoggedIn){
				dispatch({type: 'LOGIN', payload: payloadData});
				window.location.href = redirectUrl
			}
		}else{
            let access_token = res.data.accessToken
			let fullname = res.data.student.Name
			let email = res.data.student.Email
			let role = res.data.student.role
			let created_at = res.data.student.created_at
			let _id = res.data.student._id
			let Subscribe = res.data.student.Subscribe
			let img = res.data.student.img

			let isLoggedIn = true;
			localStorage.setItem('access_token', access_token)
			localStorage.setItem('fullname', fullname);
			localStorage.setItem('email', email);
			localStorage.setItem('role', role);
			localStorage.setItem('created_at', created_at);
			localStorage.setItem('isLoggedIn', isLoggedIn);
			localStorage.setItem('_id', _id);
			localStorage.setItem('Subscribe', Subscribe);
			localStorage.setItem('img', img);

            const payloadData = {
                    isLoggedIn,
                    fullname,
                    email,
                    role,
                    created_at,
                    access_token,
					_id,
					Subscribe,
					img
                }
			if(isLoggedIn){
				dispatch({type: 'LOGIN', payload: payloadData});
				window.location.href = redirectUrl
			}
		}
	}

return (
    <>
		<NewNavbar/>

		<section className="login_banner pt-5 pb-5"> 
			<div className="container">
				<div className="row"> 
					<div className="col-md-5 ml-auto text-center">
						<div className="all_banner_text mt-5 login_banner_text"> 
							<h2 className="font-30">ONLY ONE STEP AWAY FROM UNLIMITED Q&A, SOLUTIONS MANUAL </h2> 
							<p>Sign In/Sign Up and get instant, Unlimited access to Academic Help at just $7/month!</p>
							<img src="/images/logo1.png" className="img-fluid" alt="logo"/> 
						</div>
					</div>
					<div className="col-md-5 ml-auto" style={{display: whichSegment == 'signin' ? 'block' : 'none' }}> 
						{/* <form className="row form_banner form_banner_login" method='post' action='/api/auth/callback/credentials'> */}
						<form className="row form_banner form_banner_login" method='post' onSubmit={submitForm}>
							<input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
							<div className="col-md-12 bg_form_login">
								<div className="col-md-12">
									<h2><span>Sign In</span></h2>
								</div>
							
								<div className="form-group col-md-12"> 
									<input type="text" className="form-control" ref={emailRef} placeholder="Email" name="email"/> 
								</div>

								<div className="form-group col-md-12"> 
										<input type={openPassword} className="form-control" ref={passwordRef} placeholder="password" name="password"/>
										<span onClick={showPassword} className={"field-icon toggle-password2 " +(openPassword != "password" ? "fa fa-eye" : "fa fa-eye-slash")}></span>
								</div>
							
								<div className="col-md-12">
									<div className="row"> 
										<div className="form-group col-md-6 Remember_me"> 
											<div className="form-check">
												<label className="form-check-label">
													{/* <input type="checkbox" className="form-check-input" value=""/>
													<span>Remember me</span> */}
												</label>
											</div>
										</div>
										<div className="form-group text-right forgot_passw col-md-6"> 
											<a href="#" onClick={()=>{forgot()}}>Forgot password?</a> 
										</div>
									</div> 
								</div>
							
					
							<div className="form-group col-md-12 text-center signin_btn1"> 
							{error && (<p style={{ color: 'red', margin: '0px' }}>{error}</p>)} 
							{success && (<p style={{ color: 'green', margin: '0px' }}>{success}</p>)} 
								<button type="submit" className="btn form-control" disabled={disabled}> {loader ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Sign In'}</button> 
							</div>
				
							<div className="form-group col-md-12 trems_privacy text-center"> 
								<div className="form-check">
									<label className="form-check-label">
										<input type="checkbox" className="form-check-input" checked={checkedState} onChange={agreePolicy}/> By Signing in you agree to our <span> Conditions of Use and Privacy Notice.</span>
									</label>
								</div>
							</div>

							<div className="col-md-12 text-center">
								<div className="or_bodr1">
									<span>or</span>
								</div>
							</div>
				
							<div className="col-md-12 text-center social_link_banner">
								<ul>
									<GoogleLogin
										clientId={process.env.REACT_APP_GOOGLE_ID} //CLIENTID NOT CREATED YET
										buttonText="GOOGLE"
										onSuccess={responseGoogle}
									/>
									{/* u can remove providers && it was causing an error thats the reason ist present */}
									{/* {Object.values(providers).map(provider => (
										<span key={provider.id}>
										{provider.id === "credentials" ? <span></span> :
											<li key={provider.name}>
												{console.log(redirectUrl)}
												<a href="#" className={`${provider.id}_link`} onClick={(e) => { e.preventDefault(); signIn(provider.id,{ callbackUrl : redirectUrl })}}>
													<i className={`fa fa-${provider.id}`}></i> {provider.name}
												</a>
											</li>
										}
										</span>
									))} */}
									{/* <div key={provider.name}>
										 	<button onClick={() => signIn(provider.id, {callbackUrl : 'http://localhost:3000/dashboard'})}>Sign in with {provider.name}</button>
										</div> */}
									{/* <li><a href="#" className="google_link"><i className="fa fa-google"></i> Google</a></li>
									<li><a href="#" className="facebook_link"><i className="fa fa-facebook"></i> Facebook</a></li> */}
								</ul> 
							</div>
							<div className="col-md-12 text-center">
								<div className="sign_up_link">
									Don't have an account? <Link to="/auth/signup">Sign Up here</Link>
								</div>
							</div>
							</div>
						</form>
					</div>
					<div id="forGotPass1" className="show_signin col-md-5 ml-auto" style={{display: whichSegment == 'email-link' ? 'block' : 'none',marginBottom:"70px"}}>
							<div className="bg_clr_frgot"> 
								<h4  className="modal-title text-center">Forgot<span> password?</span> </h4>
								<p className="sub_headings text-center">Please Enter Your Registered Email ID</p>
								<form action="" onSubmit={sendForgotEmail} method="post" className="login-register cool-b4-form" style={{float:"inherit"}}>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group bdr_log_up mb-3"> 
													<input type="email" ref={forgotEmailRef} className="form-control" required placeholder="Enter Your Email ID"/> 
													<span  className="error">{error}</span>
											</div>
										</div>
										<div className="col-md-12 mt-4">
											<button type="submit" className="btn btn-block btn-danger btn-login buttons" id="submitMobile" >Submit</button>
										</div>
									</div>
								</form>
							</div>
						</div>

						<div id="verifyOTPdata" onSubmit={handleResetCode} className="show_signin" style={{display:whichSegment == 'otp' ? 'block' : 'none',marginBottom:"15px"}}>
							<div className="bg_clr_frgot">
								<h4  className="modal-title text-center">Verify Your <span> Email ID</span> </h4>
								<p className="sub_headings text-center">4 digit Verification Code has been sent to <br/> Your registered Email ID</p>
								<form action="" className="login-register cool-b4-form" style={{float:"inherit"}}>
									<div className="row">
									<div className="col-md-12 mb-3">
										<div className="form-group otpVerify">
											<input type="text" required className="" maxLength="1" id="one" placeholder="" name="1" onChange={(e)=>onchangeReset(e)}/>
											<input type="text" required className="" maxLength="1" id="two" placeholder="" name="2" onChange={(e)=>onchangeReset(e)}/>
											<input type="text" required className="" maxLength="1" id="three" placeholder="" name="3" onChange={(e)=>onchangeReset(e)}/>
											<input type="text" required className="" maxLength="1" id="four" placeholder="" name="4" onChange={(e)=>onchangeReset(e)}/>
										</div>
										<span className="error">{error}</span>
									</div>
									<div className="col-md-12">
										<button type="submit" className="btn btn-block btn-danger btn-login buttons" id="submitCode">Submit</button>
									</div>
									<div className="col-md-12">
										<p className="text-center resendOtp"><a href="" className="link-anchor">Resend Verification Code</a></p>
									</div>
									</div>
								</form>
							</div>
						</div>

						<div id="changePassword" onSubmit={changePasswordT} className="show_signin" style={{display:whichSegment == 'change-p' ? 'block' : 'none',marginBottom:"15px"}}>
							<div className="bg_clr_frgot">
								<h4  className="modal-title text-center"> Change<span> Password?</span> </h4>
								<p className="sub_headings text-center">Please Enter New Password</p>
								<form action="" className="login-register cool-b4-form" style={{float:"inherit"}}>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group bdr_log_up"> 
												<input type="password" className="form-control" name="chnageP" ref={chPRef} required placeholder="New Password"/>  
												{/* <span  className="error">Please Enter Password</span> */}
												<span className="fa fa-eye field-icon toggle-password"></span>
											</div>
										</div>
										<div className="col-md-12 mb-4">
											<div className="form-group bdr_log_up"> 
												<input type="password" className="form-control" name="confirmchangeP" required ref={conchPRef} placeholder="Confirm Password"/> 
												<span  className="error">{error}</span>
												<span className="fa fa-eye field-icon toggle-password"></span>
											</div>
										</div>
										<div className="col-md-12 mt-4">
											<button type="submit" className="btn btn-block btn-danger btn-login buttons" id="confirmPass">Submit</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div id="successChanged" className="show_signin" style={{display:whichSegment == 'success' ? 'block' : 'none',marginBottom:"15px"}}>
							<div className="bg_clr_frgot">
								<div className="congratulation_text text-center">
									<img src="/images/like.png" className="img-fluid mb-2" alt=""/>
									<h4  className="modal-title text-center">Password Changed <span>Successfully </span></h4>
									<div className="col-md-12">
										<button type="button" className="btn btn-block btn-danger btn-login buttons" id="LoginAgain" style={{margin:"13px 0px",textTransform: "none"}} onClick={setSignin}>Click here to Login</button>
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

// SignIn.getInitialProps = async (context) => {
//   return {
//     csrfToken: await csrfToken(context),
//     providers: await providers()
//   }
// }

// export async function getServerSideProps(context){
// 	const providers = await providers()
// 	return {
// 	  props: { providers }
// 	}
// }