import BookImage from '../../common/book-image'
import {MakeSlug} from '../../common/make-slug'
import { Link } from 'react-router-dom';

export default function SingleBook({...props}){
    return(
        <div className="col-md-3 pbtm">
            <div className="our_popular_text">
                <div className="our_popular_img">
                    {/* <img src={props.image} className="img-fluid" alt=""/> */}
                    <BookImage isbn={props.isbn} bookname={props.bookname}/>
                </div>
                <div className="our_popular_title">
                    {props.bookname} 
                </div>
                <div className="our_popular_isbn_no">
                ISBN: <span>{props.isbn}</span>
                </div>
                <div className="star_rating">
                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-empty"></i>
                </div>
                <div className="view_detail_btn">
                    <Link to={`/textbook-solutions-manuals/isbn-${props.isbn}-${MakeSlug(props.bookname)}-${MakeSlug(props.edition)}`}>View Detail</Link>
                </div>
            </div>
        </div>
        )
}