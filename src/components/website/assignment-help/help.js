import { useRef } from 'react'

export default function Help() {
    const vidRef = useRef(null);

    return (
        <section className="section bg_yellow">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center bg_images1">
                        <span>
                            <video ref={vidRef} src="https://backup.crazyforstudy.com/uploads/video/Assignmentflow7.mp4" className="img-fluid" controls muted/>
                        </span>
                    </div>
                    <div className="col-md-6">
                        <div className="Text_title">
                            <h5 className="pb-2">Textbook Solutions</h5>
                            <h2> How Online Assignment Help Works </h2>
                            <ul className="include_list">
                                <li><i className="fa fa-check-circle"></i> Request for online assignment help and pay only 50% initially.</li>
                                <li><i className="fa fa-check-circle"></i> Preview and demand for countless revisions.</li>
                                <li><i className="fa fa-check-circle"></i> Immediately get the exceptional assignment pages and pay the remaining.</li>
                            </ul>
                            <div className="btn1">
                                <a href="#" onClick={(e)=>{e.preventDefault();vidRef.current.play()}} className="bg_white_btn">View Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}