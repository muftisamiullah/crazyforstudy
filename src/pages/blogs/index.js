import Header from '../../components/website/home/header'
import Footer from '../../components/website/home/footer'
import Navbar from '../../components/website/home/navbar'
import { Helmet } from 'react-helmet-async'

export default function Blogs() {
	return (
		<>
			<Helmet>
				<title>Crazy For Study</title>
			</Helmet>
			<Header/>
			<Navbar/>
			<h1>Blog</h1>
			<Footer/>
		</>
	)
}
