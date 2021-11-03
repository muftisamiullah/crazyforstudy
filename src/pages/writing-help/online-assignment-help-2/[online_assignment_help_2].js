import {Helmet} from 'react-helmet-async'
import Header from '../../../components/website/home/header'
import Navbar from '../../../components/website/home/navbar'
import Footer from '../../../components/website/home/footer'
import SubmitForm from '../../../components/website/assignment-help-2/submit-form'
import HowItWorks from '../../../components/website/assignment-help-2/how-it-works'
import Marquee from '../../../components/common/marquee';

export default function OnlineAssignmentHelp2() {
	return (
		<>
			<Helmet>
				<title>Crazy For Study | Online Assessment Help</title>
			</Helmet>
			<Marquee/>
			<Header/>
			<Navbar/>
			<SubmitForm/>
			<HowItWorks/>
			<Footer/>
		</>
	)
}
