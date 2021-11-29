import { useState, useEffect, useContext } from "react";
import SearchComp from '../../common/search-comp'
import { AuthContext } from "../../../context/AuthContext";


export default function QandASearch() {
    const { selectedCon } =
    useContext(AuthContext);
    const content = selectedCon && selectedCon.content ? selectedCon.content : '';
    return (
        <>
            <section className="qa_banner pt-5 pb-5" id="solution-manuals"> 
                <div className="container">
                    <div className="row"> 
                    <div className="col-md-8 m-auto text-center">
                        <div className="all_banner_text">
                        <h1>{content && content.bannerHeading ? content.bannerHeading : 'There is a 90% chance that we have answers for your questions'}</h1>
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