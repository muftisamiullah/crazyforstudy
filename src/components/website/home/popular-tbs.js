import { useQuery } from 'react-query'
import { getPopularBooks } from '../../../libs/home'
import BookImage from '../../common/book-image'
import { Link } from 'react-router-dom';

export default function PopularTbs(){

    const { data, isLoading } = useQuery('popular-books',getPopularBooks,{ staleTime:Infinity })

    return (
        <section className="section our_popular_bg pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <div className="Content_Covered_title pb-3">
                            <h2>Our Popular Textbook Solution Manual</h2>
                            <h3>We cover various subjects from different fields. Explore each subject to learn more.</h3>
                        </div>
                    </div>
                    {data && data.map((book,key) => {
                        return (<div className="col-md-3 pbtm" key={key}>
                                    <div className="our_popular_text">
                                        <div className="our_popular_img">
                                            <BookImage isbn={book.ISBN13}/>
                                            {/* <img src="../images/our-popular/img1.jpg" className="img-fluid" alt=""/> */}
                                        </div>
                                        <div className="our_popular_title">
                                            {book.BookName}
                                        </div>
                                        <div className="our_popular_isbn_no">
                                        ISBN: <span>{book.ISBN13} </span>
                                        </div>
                                        <div className="star_rating">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-empty"></i>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        )   
                    }

                <div className="col-md-12 btn1 text-center">
                    <Link to="/textbook-solutions-manuals" className="pl-5 pr-5">View All</Link>
                </div>

                </div>
            </div>
        </section>
    )
}