import SingleBook from '../all-subjects/single-book'
import Pagination from '../../common/pagination'
import InputSearch from '../../common/input-search'

export default function AllBooks({...props}) {

    return(
        <section className="section">
            <div className="container">
                <div className="row">
                    <InputSearch/>

                    {props.data && props.data.data.length>0 ? props.data.data.map((item, key)=>{
                        return ( <SingleBook key={key} image={"/images/our-popular/img1.jpg"} bookname={item.BookName} isbn={item.ISBN13} edition={item.Edition}/> )
                    }): <div className="col-md-12 mt-4 text-center">No Data Found</div>}

                    {props.data && props.data.data.length>0 && <Pagination setPageNo={props.setPageNo} pageNo={props.pageNo} total={props.data.total}/>}
                </div>
            </div>
        </section>
    )
}