import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import BlockHeader from '../../components/website/dashboard/block-header'
import {useState, useContext} from 'react'  
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query'
import {getUser} from '../../libs/profile'
import {getMyTextBooks, addTextBooks, deleteTextBook} from '../../libs/question'
import {AuthContext} from '../../context/AuthContext';

export default function MyTbs(){
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;
    
    const [fields, setFields] = useState([{ value: null }])
    const { data: user, isLoading:userIsLoading, error:userError } = useQuery(['user-profile'], () => getUser({email:state.email}),{initialData: undefined,staleTime:Infinity, enabled: !!session})
    const { data: textbooks, isLoading:textbooksIsLoading, error:textbooksError } = useQuery(['textbooks'], () => getMyTextBooks({user_Id:state._id}),{staleTime:Infinity, enabled: !!session})
    const [formData, setFormData] = useState();


    const handleIsbn = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const addTextBookData = async (e) => {
        e.preventDefault();
        const res = await addTextBooks(formData.isbn);
    }

    function handleChange(i, event) {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    }

    function handleAdd() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }
    
    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    const deleteTextBuk =  (id) => {
        const data =  deleteTextBook(state._id, id);
        console.log(data);
    }
    
    return(
        <>
        <DashboardNavbar data={user}/>
        <SideBar data={user}/>
        <section className="content user profile-page">
                    <BlockHeader data={user}/>
                    <div className="container-fluid">
                        <div className="row clearfix mt-4">
                            <div className="col-md-12">
                                <div className="card student-list">
                                    <div className="header">
                                        <h2><strong>My</strong> textbooks</h2>
                                    </div>
                                    <div className="col-md-12  bg_color_textbooks">
                                        <p>Quick access to your college textbook manuals, add more textbooks from current or next semester	 </p>
                                    </div>
                                    <div className="col-md-12 text-center textbooks_title">
                                        <h2>Add my college textbooks</h2>
                                    </div>
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="table table-hover m-b-0 my-order-new">
                                                <thead>
                                                <tr className="table_title order">
                                                    <th>S.No</th>
                                                    <th>ISBN Detail	</th>
                                                    <th>Availability</th>
                                                    <th>Action</th>
                                                    <th>Delete</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {textbooks && textbooks.data.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td><span className="">{key}</span></td>
                                                            <td><span className="textbook-t">{item.book_isbn}</span></td>
                                                            <td>{item.book_name ? 'Available' : 'Not Available'}</td>
                                                            <td><a href="#" className="btn btn-info btn-sm btn-rounded view-reciept-btn">{item.book_name ? 'View Now' : 'Will be available in 3-4 working Days.' }</a></td>
                                                            <td>
                                                                <span className="trash_textbooks" onClick={()=>{deleteTextBuk(item._id)}}><a href="#"><i className="fa fa-trash"></i></a></span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}    
                                                {/* <tr>
                                                    <td><span className="">2</span></td>
                                                    <td><span className="textbook-t">9780134686516</span></td>
                                                    <td>Available</td>
                                                    <td><a href="#" className="btn btn-info btn-sm btn-rounded view-reciept-btn">View Now</a></td>
                                                    <td>
                                                        <span className="trash_textbooks"><a href=""><i className="fa fa-trash"></i></a></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="">3</span></td>
                                                    <td><span className="textbook-t">9780134686516</span></td>
                                                    <td>Available</td>
                                                    <td><a href="#" className="btn btn-info btn-sm btn-rounded view-reciept-btn">View Now</a></td>
                                                    <td>
                                                        <span className="trash_textbooks"><a href=""><i className="fa fa-trash"></i></a></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="">4</span></td>
                                                    <td><span className="textbook-t">9780134686516</span></td>
                                                    <td>Available</td>
                                                    <td><a href="#" className="btn btn-info btn-sm btn-rounded view-reciept-btn">View Now</a></td>
                                                    <td>
                                                        <span className="trash_textbooks"><a href=""><i className="fa fa-trash"></i></a></span>
                                                    </td>
                                                </tr> */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="card student-list">
                                    <div className="col-md-12 my-subscriptions subscri_text_book">
                                        <div id="accordion" className="main-header py-4">
                                            <div className="col-md-12  bg_color_textbooks">
                                                <p>"You have not added any textbooks, students use this section to get the quick access to the 
                                                solution manual of their course textbooks. Add all of your coursebook for which you will be requiring the 
                                                Textbook solution manual."	 
                                                </p>
                                            </div>
                                            <div className="col-md-12 text-center textbooks_title">
                                                <h2>Add my college textbooks</h2>
                                            </div>
                                            <div className="col-md-12 mt-5 fill_isbn">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <label className="col-sm-12 control-label" htmlFor="field1">Fill ISBN (13)</label>
                                                    </div>
                                                    <div className="col-md-8 form-group">
                                                        <form onSubmit={addTextBookData} id="textbookfrm" method="POST">
                                                            <div className="col-sm-10">
                                                                <div className="dynamic-wrap">
                                                                    <div className="form">
                                                                                {/* <input className="form-control isbncls" name="fields[]" type="text" minLength="13" maxLength="13" pattern="[0-9]+" title="ISBN (13)" placeholder="ISBN Number" required="required"/> */}
                                                                                {fields.map((field, idx) => {
                                                                                    return (
                                                                                        <div className="entry input-group" key={idx}>
                                                                                            <label className="barcode1234"><i className="fa fa-barcode"></i></label>
                                                                                            <input className="form-control isbncls" name="isbn" type="text" minLength="13" maxLength="13" pattern="[0-9]+" title="ISBN (13)" placeholder="ISBN Number" required="required" onChange={handleIsbn}/>
                                                                                            <span className="input-group-btn">
                                                                                                {idx == 0 ? 
                                                                                                <button className="btn btn-add btn-add_more" type="button" onClick={handleAdd}>
                                                                                                    <i className="fa fa-plus"></i>
                                                                                                </button> : 
                                                                                                <button className="btn btn-add_more btn-remove trash_iconadd" type="button" onClick={(idx)=>{handleRemove(idx)}}>
                                                                                                    <i className="fa fa-trash "></i>
                                                                                                </button>}
                                                                                            </span>
                                                                                        </div>
                                                                                    );
                                                                                })}
                                                                                
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-left Cancesbmit_btn mt-4">
                                                                <button type="submit" className="submit_btn submit_btnfirst">Submit</button>
                                                                <button type="reset" className="cancel_btn">Cancel</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}