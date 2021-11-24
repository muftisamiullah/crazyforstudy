import DatePicker from "react-datepicker";
import { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from "react-router-dom";
import {saveAssignment2} from '../../../libs/assignment'
import {AuthContext} from '../../../context/AuthContext';

export default function SubmitForm(){
   const params = useParams();
   const history = useHistory();
   const [loader, setLoader] = useState(false)

   const [startDate, setStartDate] = useState(null);
   const [value, setValue] = useState(1);
   const [words, setWords] = useState(250);
   const [formData, setFormData] = useState({});

   const [url, setUrl] = useState('#');
   const { state } = useContext(AuthContext);
   const [error, setError] = useState('')

   useEffect(() => {
		let timerError = setTimeout(() => setError(''), 3000);
		return () => {
			clearTimeout(timerError);
		}
	}, [error])

   useEffect(()=>{
      if(state._id !== null){
         setUrl('#')
      }else{
         setUrl('/auth/signin?callbackUrl='+`${process.env.REACT_APP_URL}`+'/user/my-order-details/local');
      }
    },[])

   const handleTimeSelect = (e) => {
      setFormData({...formData, [e.target.name]:e.target.value, user_Id : state?._id ,id:params.my_order_details, pages: value, amount:((value) *10)})
   }

   const filterPassedTime = (time) => {
      const currentDate = new Date();
      const selectedDate = new Date(time);
  
      return currentDate.getTime() < selectedDate.getTime();
   };

   const handleReference = (e) => {
      const stringValue = e.target.options[e.target.selectedIndex].dataset.string
      setFormData({...formData, [e.target.name]:e.target.value, 'deadline_date': startDate, user_Id : state?._id, email: state?.email, id:params.my_order_details, referenceString: stringValue, pages: value, amount:((value) *10), type:'ASSIGNMENT', link:'/user/my-orders'})
   }

   const increment = () => {
      if(value<20){
         setValue(value => value + 1)
         setWords(words => words + 250)
         setFormData({...formData, 'pages': value+1,'deadline_date': startDate,user_Id : state?._id , email: state?.email, id:params.my_order_details,amount: ((value+1) * 10),type:'ASSIGNMENT', link:'/user/my-orders'})
      }
   }

   const decrement = () => {
      if(value>1){
         setValue(value - 1)
         setWords(words - 250)
         setFormData({...formData, 'pages': value-1,'deadline_date': startDate,user_Id : state._id , email: state?.email, id:params.my_order_details,amount: ((value+1) * 10),type:'ASSIGNMENT', link:'/user/my-orders' })
      }
   }

   const handleForm2 = async (e) => {
      e.preventDefault();
      if(formData.reference == undefined){
         setError(`You haven't selected a reference`);
      }else if(formData.deadline_date == null){
         setError(`You haven't selected a Deadline date`);
      }
      var utcDate = formData.deadline_date;  // ISO-8601 formatted date returned from server
      var localDate = new Date(utcDate);
      // console.log(localDate)
      // console.log(localDate.toLocaleString(undefined, { timeZone: 'Asia/Kolkata'} ))
      // return;
      setLoader(true)
      const res =await saveAssignment2(formData)
      if(formData.user_Id == undefined){
         localStorage.setItem('assignmentData2', JSON.stringify(formData))
         history.push(url)
      }else{
         history.push(`/user/my-order-details/${res.assignment._id}`)
      }
      setLoader(false)
   }

   return(
      <section className="banner_assignment_form bg_yellow">
         <div className="container">
            <div className="row">
               <div className="col-md-9 m-auto">
                  <form className="row form_banner" onSubmit={handleForm2}>
                     <div className="col-md-12">
                        <h2><span>Submit Your Assignment</span></h2>
                     </div>
                     {/* <div className="form-group col-md-6">
                        <select className="form-control" required name="deadline_time" onChange={handleTimeSelect}>
                           <option value="">Deadline Time*</option>
                           <option value="00:00">00:00</option>
                           <option value="01:00">01:00</option>
                           <option value="02:00">02:00</option>
                           <option value="03:00">03:00</option>
                           <option value="04:00">04:00</option>
                           <option value="05:00">05:00</option>
                           <option value="06:00">06:00</option>
                           <option value="07:00">07:00</option>
                           <option value="08:00">08:00</option>
                           <option value="09:00">09:00</option>
                           <option value="10:00">10:00</option>
                           <option value="11:00">11:00</option>
                           <option value="12:00">12:00</option>
                           <option value="13:00">13:00</option>
                           <option value="14:00">14:00</option>
                           <option value="15:00">15:00</option>
                           <option value="16:00">16:00</option>
                           <option value="17:00">17:00</option>
                           <option value="18:00">18:00</option>
                           <option value="19:00">19:00</option>
                           <option value="20:00">20:00</option>
                           <option value="21:00">21:00</option>
                           <option value="22:00">22:00</option>
                           <option value="23:00">23:00</option>
                        </select>
                     </div> */}
                     <div className="form-group col-md-6"> 
                        {/* <input required="" className="form-control datepicker" name="deadlineDate" type="text"  placeholder="Deadline Date*"   autoComplete="off"/>  */}
                        <div className="customDatePickerWidth">
                              {/* <DatePicker className="form-control" required selected={startDate} format='yyyy-MM-dd' name="deadline_date" onChange={date => setStartDate(date)} /> */}
                              <DatePicker  className="form-control" placeholderText="Clcik to select deadline date" selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect filterTime={filterPassedTime} dateFormat="MMMM d, yyyy h:mm aa"/>
                        </div>
                     </div>
                     <div className="form-group col-md-6">
                        <select className="form-control"  required name='reference' onChange={handleReference}>
                           <option>Select reference</option>
                           <option value="1" data-string="Vancouver">Vancouver</option>
                           <option value="2" data-string="AGLC">AGLC</option>
                           <option value="3" data-string="APA">APA</option>
                           <option value="4" data-string="BMJ">BMJ</option>
                           <option value="5" data-string="Chicago">Chicago</option>
                           <option value="6" data-string="Footnotes">Footnotes</option>
                           <option value="7" data-string="Footnotes and bibliography">Footnotes and bibliography</option>
                           <option value="8" data-string="Harvard">Harvard</option>
                           <option value="9" data-string="MHRA">MHRA</option>
                           <option value="10" data-string="MLA">MLA</option>
                           <option value="11" data-string="Not Selected">Not Selected</option>
                           <option value="12" data-string="Open">Open</option>
                           <option value="13" data-string="OSCOLA">OSCOLA</option>
                           <option value="14" data-string="Oxford">Oxford</option>
                           <option value="15" data-string="Turabian">Turabian</option>
                        </select>
                     </div>
                     <div className="col-md-12">
                        <div id='myform' method='POST' action='#' className="form-group row">
                           <div className="col-md-6">
                              <input type='text' className="form-control" required value={value} name='pages' placeholder="No. of Pages*" readOnly/>
                           </div>
                           <div className="col-md-6">
                              <input type='button' value='-' className='qtyminus' field='quantity' onClick={()=>{decrement()}}/>
                              <input type='button' value='+' className='qtyplus' field='quantity' onClick={()=>{increment()}}/>
                              <span>{words} words</span>
                           </div>
                        </div>
                     </div>
                     {/* <div className="form-group col-md-12">
                        <select className="form-control"  required name='reference' onChange={handleReference}>
                           <option>Select reference</option>
                           <option value="1" data-string="Vancouver">Vancouver</option>
                           <option value="2" data-string="AGLC">AGLC</option>
                           <option value="3" data-string="APA">APA</option>
                           <option value="4" data-string="BMJ">BMJ</option>
                           <option value="5" data-string="Chicago">Chicago</option>
                           <option value="6" data-string="Footnotes">Footnotes</option>
                           <option value="7" data-string="Footnotes and bibliography">Footnotes and bibliography</option>
                           <option value="8" data-string="Harvard">Harvard</option>
                           <option value="9" data-string="MHRA">MHRA</option>
                           <option value="10" data-string="MLA">MLA</option>
                           <option value="11" data-string="Not Selected">Not Selected</option>
                           <option value="12" data-string="Open">Open</option>
                           <option value="13" data-string="OSCOLA">OSCOLA</option>
                           <option value="14" data-string="Oxford">Oxford</option>
                           <option value="15" data-string="Turabian">Turabian</option>
                        </select>
                     </div> */}
                     
                     <div className="form-group m-auto sbmit_btn">
                        <button type="submit" className="btn form-control mt-4">{loader ? "Submitting" : "submit"}</button> 
                        <span style={{color:"red"}}>{error}</span>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   )
}