import {Helmet} from 'react-helmet-async'

export default function Seo({...props}){
    const copyright = `Copyright ${new Date().getFullYear()} Crazyforstudy.com`

    return(
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description}></meta>
            <meta name="keywords" content={props.keywords}></meta>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="copyright" content={copyright} />
            <meta name="author" content="crazyforstudy.com" />
            <meta name="robots" content={props.robots}/>
            <link rel="canonical" href={props.path}/>
            
            {/* og:Meta Title */}
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={props.path} />
            <meta property="og:image" content={`https://crazyforstudy.s3.ap-south-1.amazonaws.com/isbn/${props.ISBN13}-us-300.jpg`} />
            <meta property="og:locale" content="en_US" />
            <meta name="og_site_name" property="og:site_name" content="Crazyforstudy.com"/>

            {/* Twitter */}
            <meta name="twitter:widgets:csp" content="on"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={props.title}/>
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:site" content="@CrazyForStudy1"/>
            <meta name="twitter:image" content={`https://crazyforstudy.s3.ap-south-1.amazonaws.com/isbn/${props.ISBN13}-us-300.jpg`} />

            {props.breadcrumbSchema && (<script type="application/ld+json">{`${JSON.stringify(props.breadcrumbSchema)}`}</script>)}
            {props.reviewSchema && (<script type="application/ld+json">{`${JSON.stringify(props.reviewSchema)}`}</script>)}
            {props.faqSchema && (<script type="application/ld+json">{`${JSON.stringify(props.faqSchema)}`}</script>)}
        </Helmet>
    )
}