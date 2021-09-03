import { Link } from "react-router-dom"
export default function ResultsNotFound() {
    return(
        <>
        <section className="section font_sz bg_colr_expert pt-4 pb-4">
            <div className="container">
            <div className="row">
            <div className="col-md-12">
            <h3>Sorry, we couldn't find any results for <strong>“fvxdvcxvxc”</strong></h3>
            </div>
            
            </div>
            </div>
        </section>

            <section className="section font_sz pt-4 pb-4">
            <div className="container">
            <div className="row">   
            <div className="col-md-5 border_right pb-4">
            <div className="try_adjusting_text">
            <h3> Try adjusting your search. Here are some ideas: </h3>
            <ul>
            <li>Make sure all words are spelled correctly</li>
            <li>Try different search terms</li>
            <li>Try more general search terms</li>
            </ul>
            </div>
            </div>
            <div className="col-md-7 text-center pb-4">
            <div className="try_adjusting_text">
            <h3> We didn’t find any result. But don’t worry, try 50 free Homework Q&A </h3>

            <div className="btn1">
            <Link to="/writing-help" >Ask an Expert</Link>
            <small className="text-black">* Ask 50 Free homework Question every month.</small>
            </div>
            </div>
            </div>
            
            </div>
            </div>
        </section>
        </>
    )
} 