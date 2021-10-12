import {GetName, createMarkup,capitalize} from '../../common/make-slug'
import { Link } from 'react-router-dom';

export default function QABreadCrumb({...props}){
    return(
        <section className="bg_banner_color pt-0 pb-0">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12 text-left">
                        <div className="all_banner_text"> 
                            <h2>{capitalize(GetName(props.heading))}</h2>
                            <ul className="breadcrumb">
                                <li><Link to={`/`}>Home</Link><span dangerouslySetInnerHTML={createMarkup('&sol;')}/></li>
                                <li><Link to={`/q-and-a`}>{capitalize(props.type)}</Link>{props.subject ? <span dangerouslySetInnerHTML={createMarkup('&sol;')}/>:''}</li>
                                <li><Link to={`/q-and-a/${props.subject}`}>{capitalize(props.subject)}</Link>{props.sub_subject? <span dangerouslySetInnerHTML={createMarkup('&sol;')}/>:''}</li> 
                                <li><Link to={`/q-and-a/${props.subject}/${props.sub_subject}`}>{capitalize(GetName(props.sub_subject))}</Link>{props.sub_sub_subject? <span dangerouslySetInnerHTML={createMarkup('&sol;')}/>:''}</li>
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