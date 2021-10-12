import {GetName, createMarkup,capitalize} from '../../common/make-slug'

export default function TBSBreadCrumb({...props}){
    
    return(
        <section className="bg_banner_color pt-0 pb-0">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12 text-left">
                        <div className="all_banner_text"> 
                            <h2>{capitalize(GetName(props.heading))}</h2>
                            <ul className="breadcrumb">
                                <li><a href={`/`}>Home   </a><span dangerouslySetInnerHTML={createMarkup('&sol;')}/></li>
                                <li><a href={`/textbook-solutions-manuals/`}> {capitalize(props.type)} </a>{props.subject ? <span dangerouslySetInnerHTML={createMarkup('&sol;')}/>:''}</li>
                                <li><a href={`/textbook-solutions-manuals/${props.subject}`}>{capitalize(props.subject)} </a>{props.sub_subject? <span dangerouslySetInnerHTML={createMarkup('&sol;')}/>:''}</li> 
                                <li><a href={`/textbook-solutions-manuals/${props.subject}/${props.sub_subject}`}>{capitalize(GetName(props.sub_subject))} </a>{props.sub_sub_subject? <span dangerouslySetInnerHTML={createMarkup('&sol;')}/>:''}</li>
                                {/* <li>{capitalize(props.sub_subject)}</li> */}
                                <li>{capitalize(props.sub_sub_subject)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}