import {useState, useEffect} from 'react';

export default function  Pagination({...props}) {
    const[pages, setPages] = useState(0);

    useEffect(() => {
        setPages(Math.ceil(props.total / 12));
        return () => {}
    },[])

    const handleClick = (e) => {
        e.preventDefault();
        if(e.target.innerText != 0){
            props.setPageNo(e.target.innerText - 1);
        }
    }

    const handlePrev = (e) => {
        e.preventDefault();
        if(props.pageNo > 0){
            props.setPageNo(props.pageNo - 1)
        }
    }

    const handleNext = (e) => {
        e.preventDefault();
        if(props.pageNo + 1 < pages){
            props.setPageNo(props.pageNo + 1)
        }
    }

    const getPaginationGroup = () => {
        let start = Math.floor((props.pageNo) / 5) * 5;
        return new Array(5).fill().map((_, idx) => start + idx + 1);
    };
    
    return(
        <div className="col-md-12 mt-4">
            <div className="next_prew">
                <ul>
                    <li><a href="#" className="border-left-0 " onClick={handlePrev}>Previous</a></li>
                    {/* old code */}
                    {/* {[...Array(pages)].map((e, i) => 
                        ( i!=0 && (props.pageNo+1 == i || i<3) ) &&
                            <li key={i}>
                                <a href="#" className={props.pageNo+1 == i ? 'active':''} onClick={handleClick}>{i}</a>
                            </li>
                    )}
                    {[...Array(pages)].map((e, i) => 
                        ( i>pages-3 ) &&
                            <li key={i}>
                                <a href="#" className={props.pageNo+1 == i ? 'active':''} onClick={handleClick}>{i}</a>
                            </li>
                    )} */}

                    {/* new updated code */}
                    {getPaginationGroup().map((e, i) => 
                        e<=pages ? <li key={i}>
                            <a href="#" className={props.pageNo+1 == e ? 'active':''} onClick={handleClick}>{e}</a>
                        </li> : ''
                    )}
                    <li><a href="#" onClick={handleNext}>Next</a></li>
                </ul>
            </div>
        </div>
    )
}