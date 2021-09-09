import { useRef, useState, useContext, useEffect } from 'react';
import {saveReview} from '../../libs/book';
import { useParams } from 'react-router';
import {AuthContext} from '../../context/AuthContext';

export default function Modal({...props}){
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;

    const [ratings, setRatings] = useState();
    const [error, setError] = useState();
    const [disabled, setDisabled] = useState(true);
    const params = useParams();

    const nameRef = useRef();
	const feedbackRef = useRef();
	const countryRef = useRef();

    const regex = /\d{13}/g;
    const data = params.subject != undefined ? params.subject.match(regex) : params.subject;
    const ISBN13 = data ? data[0] : null; 

    const setDis = (e) => {
        if(e.target.value != ''){
            setDisabled(false);
        }else{
            setDisabled(true)
        }
    }

    const closeDialog = () => {
        props.setModalClass('none')
        props.setDisplay('')
        if (document.body.style.overflow !== "scroll") {
            document.body.style.overflow = "scroll";
        } else {
            document.body.style.overflow = "hidden";
        }
    }

    const setRating = (e) => {
        setRatings(e.target.value)
    }

    const saveRev = async(e) => {
        e.preventDefault();
        if(nameRef.current.value == ""){
            setError("Name Cant be Empty")
            return;
        }
        const res = await saveReview(ISBN13, {name:nameRef.current.value, rating:ratings,review:feedbackRef.current.value, country:countryRef.current.value})
        if(res?.status == 201){
            closeDialog();
        }
    }

    useEffect(() => {
		let timerError = setTimeout(() => setError(''), 3000);
		return () => {
			clearTimeout(timerError);
		}
	}, [error])

    return(
        <div className={`modal fade modal-center Feedback_review ${props.modalClass}`} id="myModal_review" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: `${props.display}`, overflowY: "scroll"}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0 p-0"> 
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeDialog}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body pt-0 mt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <form onSubmit={(e)=>{ saveRev(e) }}>
                                        {/* <div className="form-row">
                                            <div className="col-md-6 form-group">
                                                <label>Order Id</label>
                                                <input type="text" className="form-control" placeholder="Enter order Id"/>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label>Review Title</label>
                                                <input type="text" className="form-control" placeholder="Review Title"/>
                                            </div>
                                        </div> */}
                                        <div className="form-row"> 
                                            <div className="col-sm-12 col-md-6 form-group">
                                                <label>Name </label>
                                                <input type="text" ref={nameRef} name="name" className="form-control" placeholder="Enter Name" onChange={setDis}/>
                                                <span style={{color:"red"}}>{error}</span>
                                            </div>            
                                            <div className="col-sm-12 col-md-6 form-group">
                                                <label>Give Your Rating  </label>
                                                <div className="star-rating">
                                                    <input type="radio" id="5-stars" name="rating" value="5" onChange={setRating}/>
                                                    <label htmlFor="5-stars" className="star">&#9733;</label>
                                                    <input type="radio" id="4-stars" name="rating" value="4" onChange={setRating}/>
                                                    <label htmlFor="4-stars" className="star">&#9733;</label>
                                                    <input type="radio" id="3-stars" name="rating" value="3" onChange={setRating}/>
                                                    <label htmlFor="3-stars" className="star">&#9733;</label>
                                                    <input type="radio" id="2-stars" name="rating" value="2" onChange={setRating}/>
                                                    <label htmlFor="2-stars" className="star">&#9733;</label>
                                                    <input type="radio" id="1-star" name="rating" value="1" onChange={setRating}/>
                                                    <label htmlFor="1-star" className="star">&#9733;</label>
                                                    </div>
                                                </div>  
                                                <div className="col-sm-12 col-md-12 form-group">
                                                    <label>Write Your Feedback   </label>
                                                    <textarea rows="3" ref={feedbackRef} name="feedback" onChange={setDis} className="form-control" placeholder="Please write your feedback here..."></textarea>
                                                </div>  
                                                <div className="col-sm-12 col-md-12 form-group">
                                                    <label>Country     </label>
                                                    <select className="form-control" ref={countryRef} name="country">
                                                        <option>--Select Country--</option>
                                                        <option>India</option>
                                                        <option>US</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button type="submit" disabled={disabled} className="btn sbmt_feedbk mt-2 mb-4">Submit Your Feedback</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}