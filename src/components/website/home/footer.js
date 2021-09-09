import {Link} from 'react-router-dom'

export default function Footer() {
    return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
					<ul>
						<li><Link to="#"><img src="/images/logo_f.jpg" className="img-fluid" alt="logo footer"/></Link></li>
						<li className="pt-3">Crazy for Study is a platform for the provision of academic help. It functions with the help of a team of ingenious subject matter experts and academic writers who provide textbook solutions to all.</li>
					</ul>
					<ul className="socail_icons">
						<li><a href="https://www.facebook.com/Crazy-for-Study-133559800329407" target="_blank"><i className="fa fa-facebook"></i></a></li>
						<li><a href="https://twitter.com/CrazyForStudy1" target="_blank"><i className="fa fa-twitter"></i></a></li>
						<li><a href="https://www.youtube.com/channel/UCKc0xrTi9VKe5_sCh5C15ig" target="_blank"><i className="fa fa-youtube"></i></a></li>
						<li><a href="https://www.linkedin.com/company/crazyforstudy/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
						<li><a href="https://www.pinterest.com/crazyforstudy1" target="_blank"><i className="fa fa-pinterest"></i></a></li>
						<li><a href="https://www.instagram.com/crazyforstudy_cfs" target="_blank"><i className="fa fa-instagram"></i></a></li>
					</ul>
					</div>
					<div className="col-md-3 pl-5">
					<h3>Study Help</h3>
					<ul>
						<li><Link to="/q-and-a"><i className="fa fa-angle-right"></i> Q&A </Link></li>
						<li><Link to="/textbook-solutions-manuals"><i className="fa fa-angle-right"></i> Solutions Manual</Link></li>
						<li><Link to="/writing-help"><i className="fa fa-angle-right"></i> Assignment Help</Link></li>
						<li><Link to="/about"><i className="fa fa-angle-right"></i> About</Link></li>
					</ul>
					</div>
					<div className="col-md-3 pl-5">
					<h3>Other Pages</h3>
					<ul>
						<li><Link to="/privacy-and-policy"><i className="fa fa-angle-right"></i> Privacy & Policy</Link></li>
						<li><Link to="/faqs"><i className="fa fa-angle-right"></i> FAQ</Link></li>
						<li><Link to="/terms-and-conditions"><i className="fa fa-angle-right"></i> Term of Use</Link></li>
						{/* <li><Link to="#"><i className="fa fa-angle-right"></i> Tutor Login</Link></li> */}
					</ul>
					</div>
					<div className="col-md-3 pl-4">
					<h3>Contact</h3>
					<ul>
						<li><Link to="#"><i className="fa fa-angle-right"></i> Sitemap </Link></li>
						<li><a href="tel:+17755000051"><i className="fa fa-angle-right"></i> +1 (775) 500-0051 </a></li>
						<li><a href="mailto:support@crazyforstudy.com"><i className="fa fa-angle-right"></i> support@crazyforstudy.com</a></li>
					</ul>
					</div>
				</div>
			</div>
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-md-4 text-left">
						<p>@ Copyright crazyforstudy 2021</p>
						</div>
						<div className="col-md-4 text-center">
						<ul>
							<li><a href="https://apps.apple.com/app/id1528935697" target="_blank"><img src="/images/ios-app-button.png" className="img-fluid" alt=""/></a></li>
						</ul>
						</div>
						<div className="col-md-4 text-right">
						<ul>
							<li><Link to="#"><img src="/images/master-card.png" className="img-fluid" alt=""/></Link></li>
							<li><Link to="#"><img src="/images/discover.png" className="img-fluid" alt=""/></Link></li>
							<li><Link to="#"><img src="/images/paypal.png" className="img-fluid" alt=""/></Link></li>
							<li><Link to="#"><img src="/images/american-express.png" className="img-fluid" alt=""/></Link></li>
						</ul>
						</div>
					</div>
				</div>
			</div>
        </footer>
    )
  }
  