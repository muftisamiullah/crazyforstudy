import { useRef } from 'react'

export default function Reviews() {
    const vidRef = useRef(null);
    const vidRef1 = useRef(null);

    return(
        <>
        <section className="section Content_Covered mt-5">
            <div className="container">
            <div className="row">
            <div className="col-md-12 text-center mb-5">
            <div className="Content_Covered_title pb-3">
            <h2>All Reviews</h2>
            <h3>We develop online assignment writing service in Australia from scratch.</h3>
            </div>
            </div>
            </div>
            </div>
            </section>
            <section className="section bg_belu1 text_white pt-4 pb-4">
            <div className="container">
            <div className="row">
            <div className="col-md-6 text-center bg_images1">
            <span>
                {/* <video ref={vidRef1}  src="https://backup.crazyforstudy.com//uploads/video/crazy-video.mp4" className="img-fluid" controls muted/> */}
                <img src="/images/Student_Reviews.png" className="img-fluid" alt=""></img>
            </span></div>
            <div className="col-md-6">
            <div className="Text_title text_tb_center">
            <h2>View Student Reviews </h2>
            <p>Just visit crazyforstudy.com and fill up the assignment submission form. Enter the assignment requirements and upload the files. </p>
            <div className="btn1">
            {/* <a href="#" onClick={(e)=>{e.preventDefault();vidRef1.current.play()}}  className="">View all reviews</a> */}
            </div>
            </div>
            </div>
            </div>
            </div>
        </section>
        <section className="section bg_green1 text_white pt-4 pb-4">
<div className="container">
<div className="row clearfix1">
<div className="col-md-6 text-center float-right"><span>
    {/* <video ref={vidRef} src="https://backup.crazyforstudy.com/uploads/video/Comp2_4.mp4" className="img-fluid" controls muted/> */}
    <img src="/images/Tutor_Reviews.png" className="img-fluid" alt=""></img>
</span></div>
<div className="col-md-6 float-left">
 <div className="Text_title pt-5 mt-5">
 <h2>View Tutor Reviews </h2>
  <p>Just visit crazyforstudy.com and fill up the assignment submission form. Enter the assignment requirements and upload the files. </p>
 <div className="btn1">
 {/* <a href="#" onClick={(e)=>{e.preventDefault();vidRef.current.play()}} className="">View all reviews</a> */}
 </div>
 </div>
</div>
</div>
</div>
</section>
        </>
    )
}