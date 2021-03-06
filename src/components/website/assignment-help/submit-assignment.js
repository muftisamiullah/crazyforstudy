import { Link, useParams, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query'
import { getSubjects, getSubSubject } from '../../../libs/subsubject'
import { saveAssignment } from '../../../libs/assignment'
import { MakeSlug, checkExtension } from '../../../components/common/make-slug'
import { useState, useContext, useEffect } from 'react'
import {AuthContext} from '../../../context/AuthContext';

export default function SubmitAssignment() {
    const history = useHistory();
    const [subject, setSubject] = useState();
    const [counter, setCounter] = useState(1);
    const [formData, setFormData] = useState({});
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(true)
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;

    const { data: subjects, isLoading:subjectsIsLoading, error:subjectsError } = useQuery(['subjects'], () => getSubjects(),{staleTime:Infinity}) //only called when session would be present
    const { data: subsubjects, isLoading:subsubjectsIsLoading, error:subsubjectsError } = useQuery([subject], () => getSubSubject(subject),{staleTime:Infinity, enabled: !!subject}) //only called when subject would be present

    const getSelectedSubject = (e) => {
        const subjectId = e.target.options[e.target.selectedIndex].dataset.subjectid
        setFormData({...formData, subject: e.target.value,subject_id: subjectId, user_Id : state?._id })
        setSubject(e.target.value)
    }
  
    const selectSubSubject = (e) => {
        const subSubjectId = e.target.options[e.target.selectedIndex].dataset.subsubjectid
        setFormData({...formData, sub_subject: e.target.value, sub_subject_id: subSubjectId})
    }

    const setHandleImage = (e) => {
        let filename = e.target.files[0].name;
        if(checkExtension(filename)){
            setFormData({...formData, [e.target.name]: e.target.files[0] });
        }else{
            setError('*unsupported file format choose a different file format')
        }
    }

    const incrementCounter = () => {
        if(counter < 3 ){
            setCounter(counter + 1);
        }else{
            setError('*max 3 files can be uploaded only')
        }
    }

    const decrementCounter = (i) => {
        if(counter > 1  ){
            setCounter(counter - 1);
        }
    }

    const handleQuestion = (e) => {
        if(e.target.name == ""){
            setDisabled(true);
        }else{
            setDisabled(false);
        }
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleAssignment = async(e) => {
        e.preventDefault()
        if(formData.subject == undefined || formData.sub_subject == undefined){
            setError('*choose both subject and sub subject')
            return;
        }
        setLoader(true)
        let form = new FormData();
        form.append('question',formData.question)
        form.append('subject',formData.subject)
        form.append('subject_id',formData.subject_id)
        form.append('sub_subject',formData.sub_subject)
        form.append('sub_subject_id',formData.sub_subject_id)
        form.append('user_Id',formData.user_Id)
        form.append('image0',formData.image0)
        form.append('image1',formData.image1)
        form.append('image2',formData.image2)
        if(formData.user_Id == undefined){
            localStorage.setItem('assignmentData1',JSON.stringify(formData))
            history.push(`/writing-help/online-assignment-help-2/local`)
        }else{  
            const res = await saveAssignment(form);
            setLoader(false)
            if(res && !res.error){
                history.push(`/writing-help/online-assignment-help-2/${res.assign._id}`)
            }
        }
    }

    useEffect(() => {
		let timerError = setTimeout(() => setError(''), 3000);
		return () => {
			clearTimeout(timerError);
		}
	}, [error])

    return(
        <section className="banner_assign_ment">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner_text text_white">
                            <h1>Tough Assignments & No One To Help?</h1>
                            <p className="pt-1 pb-1">Our Assignment Help Services Backed Up By Professional PhD Experts.</p>
                            <ul className="list_banner1">
                                <li><img src="/images/assisment_banner_icon1.png" className="img-fluid" alt=""/> 100% Plagiarism Free </li>
                                <li><img src="/images/assisment_banner_icon2.png" className="img-fluid" alt=""/> 24/7 Live Help </li>
                                <li><img src="/images/assisment_banner_icon3.png" className="img-fluid" alt=""/> On Time Delivery </li>
                                <li><img src="/images/assisment_banner_icon4.png" className="img-fluid" alt=""/> 4.9/5 Star Rating</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <form className="row form_banner" onSubmit={handleAssignment}>
                            <div className="col-md-12">
                                <h2><span>Submit Your Assignment</span></h2>
                            </div>
                            <div className="form-group col-md-12">
                                <select type="text" className="form-control" onChange={getSelectedSubject} required>
                                    <option value="999">Select Subject</option>
                                    {subjects && subjects.data.map((item,key)=>{
                                        return(
                                            <option value={MakeSlug(item.subject)} key={key} data-subjectid={item._id}>{item.subject}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <select type="text" className="form-control" onChange={selectSubSubject} required>
                                    <option>Sub Subject</option>
                                    {subsubjects && subsubjects.data.map((item,key)=>{
                                        return(
                                            <option value={item.sub_subject} key={key} data-subsubjectid={item._id}>{item.sub_subject}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <textarea className="form-control" required minLength="50" placeholder="Write Your Question Here.." name="question" onChange={handleQuestion}></textarea>
                            </div>
                            <div className="form-group col-md-12 fill_isbn mb-0">
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <div className="col-sm-12 p-0">
                                            <div className="dynamic-wrap">
                                                <div className="form">{[...Array(counter)].map((e, i) =>
                                                    <div className="entry input-group" key={i}>
                                                        <input className="form-control isbncls" type="file" name={`image${i}`} id={`image${i}`} onChange={setHandleImage}/>
                                                        {/* <div className="custm_fill_file"> 
                                                            <input id="file-upload" type="file" name={`image${i}`} onChange={setHandleImage}/> 
                                                            <label htmlFor="file-upload" className="custom-file-upload">Choose File</label>
                                                        </div> */}
                                                        <span className="input-group-btn">
                                                            { counter == i+1 ?
                                                            <button className="btn btn-add btn-add_more" type="button" onClick={incrementCounter}>
                                                                <span className="fa fa-plus" ></span> Add more file
                                                            </button>
                                                            : '' }
                                                            { counter != i+1 ?
                                                            <button className="btn btn-remove trash_iconadd" type="button" onClick={(i)=>{decrementCounter(i)}}>
                                                                <span className="fa fa-minus" ></span> Remove
                                                            </button>
                                                            : '' } 
                                                        </span>
                                                    </div>)}
                                                    <span style={{color:"red"}}>{error}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <button type="submit" disabled={disabled} className="btn form-control submit_btn1">{loader ? "Submitting" : 'Submit'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}