import {Helmet} from "react-helmet-async";
import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Banner from '../components/website/home/banner'
import ContentCovered from '../components/website/home/content-covered'
import FindTbs from '../components/website/home/find-tbs'
import AssignmentHelp from '../components/website/home/get-assignment-help'
import AskExpert from '../components/website/home/ask-an-expert'
import BuySubscription from '../components/website/home/buy-subscription'
import SubjectsWeCover from '../components/website/home/subjects-we-cover'
import PopularTbs from '../components/website/home/popular-tbs'
import SubscribeHere from '../components/website/home/subscribe-here'
import TutorCollege from '../components/website/home/tutor-college'
import Follow from '../components/website/home/follow'
import Marquee from '../components/common/marquee';

export default function Home() {
  return (
    <>
		<Helmet>
			<title>Crazy For Study | Homework Help | Textbook Solution | Q&A</title>
			<meta name="description" content="CFS is a leading homework help platform. We offer 24/7 Assignment Help, Textbook Solution and Q & A services crafted by PhD Subject Experts at just $7 per month!"></meta>
		</Helmet>
		<Marquee/>
		<Header/>
		<Navbar/>
		<Banner/>
		<ContentCovered/>
		<FindTbs/>
		<AssignmentHelp/>
		<AskExpert/>
		<BuySubscription/>
		<SubjectsWeCover/>
		<PopularTbs/>
		<SubscribeHere/>
		<TutorCollege/>
		<Follow/>
		<Footer/>
    </>)
}
