import './App.css';
import { publicRoutes, privateRoutes } from './routes/index.js';
import PrivateRoute from './helper/PrivateRoute';
import { QueryClient, QueryClientProvider } from "react-query";
import { useLocation, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './context/AuthContext.jsx';
import {useCallback, useEffect, useState} from 'react';

function App() {
	const queryClient = new QueryClient();
	const location =  useLocation();
	useEffect( () => { 
		if(location.pathname.includes('user') || location.pathname.includes('dashboard')) 
			{
				document.querySelector("body").classList.add("theme-blush")
				document.querySelector("body").classList.remove("web_font1")
			}
		else{
			document.querySelector("body").classList.remove("theme-blush")
			document.querySelector("body").classList.add("web_font1")
		}
	});

	// useEffect(() => {
	// 	if(window.innerHeight < 1170){
	// 		document.querySelector("body").classList.add("ls-closed")
	// 	}else{
	// 		document.querySelector("body").classList.remove("ls-closed")
	// 	}
	// });

	const [width, setWidth] = useState(window.innerWidth);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
		if(window.innerWidth < 1170){
			document.querySelector("body").classList.add("ls-closed")
		}else{
			document.querySelector("body").classList.remove("ls-closed", "overlay-open")
		}
	}

	useEffect(() => {
			if(width < 1170){
				document.querySelector("body").classList.add("ls-closed")
			}else{
				document.querySelector("body").classList.remove("ls-closed", "overlay-open")
			}
			window.addEventListener('resize', handleWindowSizeChange);
			return () => {
				window.removeEventListener('resize', handleWindowSizeChange);
				document.querySelector("body").classList.add("ls-closed")
			}
	}, []);

	return (
		<HelmetProvider>
			{/* <Router> */}
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						{/* <Switch> */}
							{privateRoutes && privateRoutes.map((route => (
								<PrivateRoute exact={true} key={route.path} path={route.path} component={route.component} />
							)))}

							{publicRoutes && publicRoutes.map((route => (
								<Route exact={true} key={route.path} path={route.path} component={route.component} />
							)))}
						{/* </Switch> */}
					</AuthProvider>
				</QueryClientProvider>
			{/* </Router> */}
		</HelmetProvider>
	);
}

export default App;
