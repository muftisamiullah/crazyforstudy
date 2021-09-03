import NewNavbar from '../../components/common/new-navbar-login-signup'
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import { useRef, useState , useContext} from 'react';
import {setSignUp,saveGoogleUser}  from '../../libs/auth'
import GoogleLogin from 'react-google-login';
import {AuthContext} from '../../context/AuthContext';

export default function  SignUp() {
    const [error, setError] = useState(null);
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const schoolRef = useRef();
    const history = useHistory();

    const [loader, setLoader] = useState(false);
    const [disabled, setDisabled] = useState(true)
    
    const { dispatch, state } = useContext(AuthContext);
    const agreePolicy = (e)=>{
		if(e.target.checked){
			setDisabled(false);
		}else{
			setDisabled(true);
		}
	}

    async function SignUp(e) {
        e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const name = nameRef.current.value;
		const school = schoolRef.current.value;

        if(name === ''){
            setError("Please enter name");
			return false;
        }else if(email === ''){
			setError("Please enter email address");
			return false;
		}else if(password === ''){
			setError("Please enter password");
			return false;
		}else if(school === ''){
            setError("Please enter school");
			return false;
        }else{
            setLoader(true);
            const res = await setSignUp(
                    {
                        'Name':name,
                        'Email':email,
                        'Password':password,
                        'college':school
                    });
            if(res === 409){
                setError("User with the same email already exists");
                setLoader(false);
			    return false;
            }else if(res && res.status === 200){
                history.push({
                    pathname: '/auth/signin',
                    query: { signup: true }
                })
            }
        }
    }
    
    const responseGoogle = async (response) => {
		console.log(response);
		let user = {};
		user.fullname = response.profileObj.name;
		user.img = response.profileObj.imageUrl;
		user.social_id = response.profileObj.googleId;
		user.email = response.profileObj.email;
		const res = await saveGoogleUser(user);
		console.log(res);
		if(res && res.status == 200) {
            console.log("user created")
			let access_token = res.data.accessToken
			let refresh_token = res.data.refreshToken
			
			let isLoggedIn = true;
			localStorage.setItem('access_token', access_token)
			localStorage.setItem('refresh_token', refresh_token)
			localStorage.setItem('fullname', user.fullname);
			localStorage.setItem('email', user.email);
			localStorage.setItem('img', user.img);
			localStorage.setItem('social_id', user.social_id);
			localStorage.setItem('Subscribe', res.data.student.Subscribe);
			localStorage.setItem('_id', res.data.student._id);

			let email = user.email
			let fullname = user.fullname
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
				window.location.href = '/dashboard'
			}
		}else{
            let access_token = res.data.accessToken
			let fullname = res.data.student.fullname
			let email = res.data.student.email
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
				window.location.href = '/dashboard'
			}
		}
	}

    return(
        <>
            <NewNavbar/>
            
            <section className="login_banner pt-5 pb-5"> 
                <div className="container">
                <div className="row"> 
                    <div className="col-md-5 ml-auto text-center">
                    <div className="all_banner_text mt-5 login_banner_text"> 
                        <h2 className="font-30">Only one step away from unlimited Q&A and solutions manual </h2> 
                        <p>Register and verify your details to gain access to step-by-step solutions to over 45000 books. </p>
                        <img src="/images/logo1.png" className="img-fluid" alt="logo"/> 
                    </div>
                    </div>
                    <div className="col-md-5 ml-auto"> 
                    <form className="row form_banner form_banner_login" method="post" onSubmit={SignUp}>
                    <div className="col-md-12 bg_form_login">
                    <div className="col-md-12">
                    <h2><span>Sign Up</span></h2>
                    </div>
                <div className="form-group col-md-12"> 
                    <input type="name" className="form-control" ref={nameRef} placeholder="Full Name"/> 
                </div>
                <div className="form-group col-md-12"> 
                    <input type="email" className="form-control"  ref={emailRef} placeholder="Email"/> 
                </div>
                <div className="form-group col-md-12"> 
                    <input type="password" className="form-control" ref={passwordRef} placeholder="password"/> 
                </div>
                <div className="form-group col-md-12"> 
                    <input type="text" className="form-control" ref={schoolRef} placeholder="College / School"/> 
                </div> 
                
                <div className="form-group col-md-12 text-center signin_btn1"> 
                {error && (<p style={{ color: 'red', margin: '0px' }}>{error}</p>)} 
                    <button type="submit" className="btn form-control" disabled={disabled}>{loader ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Sign Up'}</button> 
                </div>
                
                <div className="form-group col-md-12 trems_privacy text-center"> 
                <div className="form-check">
                <label className="form-check-label">
                <input type="checkbox" className="form-check-input" value="" onChange={agreePolicy}/> By clicking on "Sign In" you're agreeing to ou <span>Terms of Use & Privacy.</span>
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

                {/* {Object.values(providers).map(provider => (
                        <span key={provider.id}>
                        {provider.id === "credentials" ? <span></span> :
                            <li key={provider.name}>
                                <a href="#" className={`${provider.id}_link`} onClick={(e) => { e.preventDefault(); signIn(provider.id, {callbackUrl : `${process.env.NEXTAUTH_URL}/dashboard`})}}>
                                    <i className={`fa fa-${provider.id}`}></i> {provider.name}
                                </a>
                                </li>
                        }
                        </span>
                    ))} */}
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_ID} //CLIENTID NOT CREATED YET
                    buttonText="GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
                </ul> 
                </div>
                <div className="col-md-12 text-center">
                <div className="sign_up_link">
                Already have an account? <Link to="/auth/signin">Sign In here</Link>
                </div>
                </div>
                </div>
                </form>
                    
                    </div>
                </div>
                </div>
                </section>

        </>
    )
}

// SignUp.getInitialProps = async (context) => {
//     return {
//       providers: await providers()
//     }
// }
  