import { Link } from 'react-router-dom';
import { MakeSlug } from '../../common/make-slug'

export default function BrowseBySubjects({...props}){
    return(
        <>
        <section className="section pt-5 pb-5">
          	<div className="container">
          		<div className="row"> 
          			<div className="col-md-12 Content_Covered_title mb-4 pb-2  text-center get-homework">
                  		<h2>Browse by subjects in {props?.data?.data[0].subject}</h2>
               		</div>
					{props.data && props.data.data.map((item,key)=>{
						return(
							<div className="col-md-4 col-lg-3" key={key}>
								<div className="books1 animated wow fadeIn">
									<img src={`/images/${item.subject+ "-img"}.jpg`} className="img-fluid" alt=""/>
									<div className="overlay_books bottom-overlay"> 
										<div className="books_text1">
											<Link to={MakeSlug(item.subject)+'/'+MakeSlug(item.sub_subject)}> {item.sub_subject}</Link>
										</div>
									</div>
								</div>
							</div>
						)
					})}
          		</div>
        	</div>
      	</section>
      	</>
    	)
}