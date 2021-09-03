export default function Modal({...props}){

    const closeDialog = () => {
        props.setModalClass('none')
        props.setDisplay('')
        if (document.body.style.overflow !== "scroll") {
            document.body.style.overflow = "scroll";
        } else {
            document.body.style.overflow = "hidden";
        }
    }

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
                                        <form>
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
                                                    <input type="text" className="form-control" placeholder="Enter Name"/>
                                                </div>            
                                                <div className="col-sm-12 col-md-6 form-group">
                                                    <label>Give Your Rating  </label>
                                                    <div className="star-rating">
                                                        <input type="radio" id="5-stars" name="rating" value="5" />
                                                        <label htmlFor="5-stars" className="star">&#9733;</label>
                                                        <input type="radio" id="4-stars" name="rating" value="4" />
                                                        <label htmlFor="4-stars" className="star">&#9733;</label>
                                                        <input type="radio" id="3-stars" name="rating" value="3" />
                                                        <label htmlFor="3-stars" className="star">&#9733;</label>
                                                        <input type="radio" id="2-stars" name="rating" value="2" />
                                                        <label htmlFor="2-stars" className="star">&#9733;</label>
                                                        <input type="radio" id="1-star" name="rating" value="1" />
                                                        <label htmlFor="1-star" className="star">&#9733;</label>
                                                        </div>
                                                    </div>  
                                                    <div className="col-sm-12 col-md-12 form-group">
                                                        <label>Write Your Feedback   </label>
                                                        <textarea rows="3" className="form-control" placeholder="Please write your feedback here..."></textarea>
                                                    </div>  
                                                    <div className="col-sm-12 col-md-12 form-group">
                                                        <label>Country     </label>
                                                        <select className="form-control">
                                                            <option>--Select Country--</option>
                                                            <option>India</option>
                                                            <option>US</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn sbmt_feedbk mt-2 mb-4">Submit Your Feedback</button>
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