export default function Details({...props}){
    return(
        <section className="section Book_Description text_justify mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="Book_Details_text">
                            <h2 className="font-17">Book Details</h2>
                            <ul>
                                <li><span>ISBN-13</span>  9788121939003   </li>
                                <li><span>Language</span> English </li>
                                <li><span>Binding</span> Paper Back   </li>
                                <li><span>Publisher</span> S Chand & Company Pvt Ltd - He   </li> 
                            </ul>
                            <ul> 
                                <li><span>Publishing</span> Date  2015   </li>
                                <li><span>Product Edition</span> 1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}