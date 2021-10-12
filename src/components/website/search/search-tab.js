import SearchComp from '../../common/search-comp'

export default function SearchTab() {
    return(<section className="bg_banner_color pt-5 pb-5"> 
                <div className="container">
                    <div className="row"> 
                        <div className="col-md-8 m-auto text-center">
                            <div className="all_banner_text">
                                <h1>Everything is figureoutable with 24/7 homework help</h1>
                                {/* <form className="mt-4">
                                <input type="text" placeholder="Search ISBN, textbook name or homework question here..." className="form-control pl-5"/>
                                <button type="submit" className="search_btn"><i className="fa fa-search"></i> Search</button>
                                </form> */}
                                <SearchComp placeholder={"Search ISBN, textbook name or homework question here..."} btnText={"Search"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}