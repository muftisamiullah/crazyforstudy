import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Helmet} from 'react-helmet-async'

export default function Header() {

	return (
		<>
		<Helmet>
			<link rel="icon" href="/favicon.ico" />
			<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
			<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      	</Helmet>
		<header>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 text-left pl-5">
						<p>Get Best Price Guarantee + 30% Extra Discount <i className="fa fa-bolt"></i></p>
					</div>
					<div className="col-md-6 text-right pr-5">
						<p>
							<a href="mailto:support@crazyforstudy.com">support@crazyforstudy.com</a>
							<a href="tel:+17755000051"> +1(775) 500-0051</a>
						</p>
					</div>
				</div>
			</div>
		</header>
		</>
	)
}
