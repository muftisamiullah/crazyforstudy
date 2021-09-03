import SearchComp from '../../common/search-comp'

export default function QandASearch() {
    return (
        <>
            <section className="qa_banner pt-5 pb-5"> 
                <div className="container">
                    <div className="row"> 
                    <div className="col-md-8 m-auto text-center">
                        <div className="all_banner_text">
                        <h1>There is a 90% chance that we have answers for your questions</h1>
                        {/* <form className="mt-4">
                            <input type="text" placeholder="Search your homework question" className="form-control pl-5"/>
                            <button type="submit" className="search_btn"><i className="fa fa-search"></i> Search</button>
                        </form> */}
                        <SearchComp placeholder={"Search your homework question"} btnText={"Search"}/>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}