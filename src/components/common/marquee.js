import {useState, useEffect} from 'react';

export default function Marquee() {
   return (<section className="tst_scroll_text">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-md-12 text-left pl-5 pr-5">
                        <div className="Content_Bar">
                           <span className="play_btnsd2"><i className="fa fa-play"></i></span>
                           <marquee behavior="scroll" direction="left" id="marquee" onkeydown="this.setAttribute('scrollamount', 0, 0);" onmouseover="this.setAttribute('scrollamount', 0, 0);" onmouseout="this.setAttribute('scrollamount', 6, 0);"><strong>Hello Student, we are revamping our site & will be live till 20th Nov'21. Till the time, please do not purchase any subscription</strong>
                           </marquee>
                           <div width="22" align="center" valign="middle" className="Light_Blue_BG">
                              <input type="button" value="Pause" id="marqueeControlButton" onClick="controlMarquee();" style="display:none"/>
                              <i id ="image3" alt="stop" className="fa fa-pause-circle-o" width="19" height="19"  onClick="controlMarquee();"></i>
                              <i id ="image4" alt="start" width="19" height="19" className="fa fa-play"  onClick="controlMarquee();" style="display:none;"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
   )
}