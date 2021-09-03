import '../styles/bootstrap.css'
import '../styles/style.css'
import '../styles/dashboard/main.css'
// import '../styles/dashboard/authentication.css'
// import '../styles/dashboard/chatapp.css'
import '../styles/dashboard/color_skins.css'
// import '../styles/dashboard/hm-style.css'
// import '../styles/dashboard/inbox.css'
// import '../styles/dashboard/rtl.css'
// import '../styles/dashboard/timeline.css'

// tutor css
// import '../styles/tutor/tutor-main.css'
// import '../public/tutor/css/color_skins.css'
// import '../public/tutor/css/custom.css'
// import '../public/tutor/css/chatapp.css'

import '../public/fonts/font.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/react-datepicker/dist/react-datepicker.min.css'

import { QueryClient, QueryClientProvider } from "react-query";
import  ErrorProvider  from '../context/error-provider'
import { Provider } from 'next-auth/client'
import { ReactQueryDevtools } from 'react-query/devtools'
import {useEffect} from 'react'
import { useRouter } from "next/router";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect( () => { 
		if(router.pathname.includes('user') || router.pathname.includes('dashboard')) 
			{
				document.querySelector("body").classList.add("theme-blush")
				document.querySelector("body").classList.remove("web_font1")
			}
		else{
			document.querySelector("body").classList.remove("theme-blush")
			document.querySelector("body").classList.add("web_font1")
		}
	});
	// if (session)
	// 	{ document.querySelector("body").classList.add("theme_blush") }
	// else{
	// 	document.querySelector("body").classList.add("web_font1")
	// }

	return (
			// <AuthProvider>
			<>
				<Provider session={pageProps.session}>
					<ErrorProvider>
						<QueryClientProvider client={queryClient}>
							{/* <ReactQueryDevtools initialIsOpen={false} /> */}
							<Component {...pageProps} />
						</QueryClientProvider>
					</ErrorProvider>
				</Provider>
			</>
			// </AuthProvider>
		)
	}

export default MyApp
