import {useState, useEffect} from 'react';

export default function Marquee() {
   const [startDisplay, setstartDisplay] = useState('block');
   const [pauseDisplay, setPauseDisplay] = useState('none');

   const controlMarquee = (type) => {
      var marquee = document.getElementById('marquee'); 

      if(type == "stop"){
         setstartDisplay('none');
         setPauseDisplay('block');

         document.getElementById('marqueeControlButton').value="Start"; 
         document.getElementById("image3").style.display ="none"; 
         document.getElementById("image4").style.display = "";

         marquee.stop();
      }
      if(type == "start"){
         setPauseDisplay('none');
         setstartDisplay('block');

         document.getElementById('marqueeControlButton').value="Pause"; 
         document.getElementById("image4").style.display ="none"; 
         document.getElementById("image3").style.display = "";

         marquee.start(); 
      }
   }

   useEffect(()=>{

   },[]);
   
   return (<section className="tst_scroll_text">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-md-12 text-left pl-5 pr-5">
                        <div className="Content_Bar">
                           <span className="play_btnsd2"><i className="fa fa-pause-circle-o" id ="image3" onClick={()=>{controlMarquee("stop")}} style={{"display":`${startDisplay}`}}></i><i id ="image4" className="fa fa-play" onClick={()=>{controlMarquee("start")}} style={{"display":`${pauseDisplay}`}}></i></span>
                           {/* <marquee behavior="scroll" direction="left" id="marquee" onKeyDown="this.setAttribute('scrollamount', 0, 0);" onMouseOver="this.setAttribute('scrollamount', 0, 0);" onMouseOut="this.setAttribute('scrollamount', 6, 0);"><strong>Hello Student, we are revamping our site & will be live till 20th Nov'21. Till the time, please do not purchase any subscription</strong> */}
                           <marquee behavior="scroll" direction="left" id="marquee"><strong>Hello Student, we are revamping our site & will be live till 7th Dec'21. Till the time, please do not purchase any subscription</strong>
                           </marquee>
                           <div width="22" align="center" valign="middle" className="Light_Blue_BG">
                              <input type="button" value="Pause" id="marqueeControlButton" style={{"display":"none"}}/>
                              {/* <i id ="image3" alt="stop" className="fa fa-pause-circle-o" width="19" height="19" onClick={()=>{controlMarquee("stop")}} style={{"display":`${startDisplay}`}} ></i>
                              <i id ="image4" alt="start" width="19" height="19" className="fa fa-play" onClick={()=>{controlMarquee("start")}} style={{"display":`${pauseDisplay}`}}></i> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
   )
}