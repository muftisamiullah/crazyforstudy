import { useState, useContext, useEffect} from 'react';

export default function Description({...props}){

    const [display1, setDisplay1] = useState(true);

    const showAll1 = () => {
        if(display1){
            setDisplay1(false)
        }else{
            setDisplay1(true)
        }
    }

    return(
        <section className="section Book_Description text_justify mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="Book_Description_text">
                            <h2 className="font-24">Book Description</h2>
                            <p style={{display: display1 === false ? "block" : "none" }}>About the Book: {props?.description} </p>
                            <p style={{display: display1 === false ? "none" : "block" }}>About the Book: {props?.description?.substr(0,200)} </p>
                            <span onClick={showAll1}>{display1 === false ? "Read Less" : "Read More"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}