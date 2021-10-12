import SearchComp from './search-comp'

export default function InputSearch(){
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                    <div className="all_banner_text">
                        {/* <form className="mt-2">
                            <input type="text" placeholder="Search Here..... ISBN / Textbook Name" className="form-control pl-5"/>
                            <button type="submit" className="search_btn"><i className="fa fa-search"></i> Search</button>
                        </form> */}
                        <SearchComp placeholder={"Search ISBN, textbook name or homework..."} btnText={"Search"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}