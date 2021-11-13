import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import BlockHeader from '../../components/website/dashboard/block-header'
import { Link, useHistory } from 'react-router-dom';
import {useState, useEffect, useRef, useContext} from 'react'
import {getUser} from '../../libs/profile'
import {getSubSubject,getSubjects} from '../../libs/subsubject'
import {askAQuestion} from '../../libs/question'
import { useQuery, useMutation,useQueryClient } from 'react-query'
import { getNavbarData } from '../../libs/home'
import {MakeSlug} from '../../components/common/make-slug'
import MyQuestion from '../user/my-question'
import {AuthContext} from '../../context/AuthContext';

export default function AskQuestion(){
   const { state } = useContext(AuthContext);
   const session = state.isLoggedIn;
   const history = useHistory();
   //ckeditor

   const editorRef = useRef()
   const image1 = useRef()
   const image2 = useRef()
   const [ editorLoaded, setEditorLoaded ] = useState( false )
   const { CKEditor, ClassicEditor} = editorRef.current || {}
   const queryClient = useQueryClient()

   useEffect( () => {
      editorRef.current = {
        CKEditor: require( '@ckeditor/ckeditor5-react' ).CKEditor, //Added .CKEditor
        ClassicEditor: require( 'ckeditor5-classic-with-mathtype' ).default,
      }
      setEditorLoaded( true )
  }, [] );

   const [display, setDisplay] = useState(false);
   const [subject, setSubject] = useState();
   const [subscribed, setSubscribed] = useState();
   const [formData, setFormData] = useState({});
   const [image, setImage] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [count, setCount] = useState(0);
   const [error, setError] = useState('');

   const { data: user, isLoading:userIsLoading, error:userError } = useQuery(['user-profile'], () => getUser({email:state.email}),{initialData: undefined, staleTime:Infinity, enabled: !!session})
   const { data: subjects, isLoading:subjectsIsLoading, error:subjectsError } = useQuery(['subjects'], () => getSubjects(),{staleTime:Infinity, enabled: !!session}) //only called when session would be present
   const { data: subsubjects, isLoading:subsubjectsIsLoading, error:subsubjectsError } = useQuery([subject], () => getSubSubject(subject),{staleTime:Infinity, enabled: !!subject}) //only called when subject would be present

   const mutation = useMutation(askAQuestion)

   // useEffect(() => {
   //    if(subjects && subjects.data){
   //       setSubject(MakeSlug(subjects.data[0].subject))
   //    }
   //    return () => {
   //    }
   // }, [subjects])

   useEffect(() => {
      setSubscribed(localStorage.getItem('subscribed'));
      return () => {
      }
   }, [])
   
   
   const [modalClass, setModalClass] = useState(false);
   const openDialog =  () => {
      setDisplay('block')
      setModalClass('show')
      if (document.body.style.overflow !== "hidden") {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "scroll";
      }
   }

   const closeDialog = () => {
      setModalClass('none')
      setDisplay('')
      if (document.body.style.overflow !== "scroll") {
          document.body.style.overflow = "scroll";
      } else {
          document.body.style.overflow = "hidden";
      }
   }

   const getSelectedSubject = (e) => {
      const subjectId = e.target.options[e.target.selectedIndex].dataset.subjectid
      setFormData({...formData, subject: e.target.value,subject_id: subjectId, user_Id : state._id, email : state.email, name : state.fullname, type :'ASK50', link:"/user/my-question"})
      setSubject(e.target.value)
   }

   const selectSubSubject = (e) => {
      const subSubjectId = e.target.options[e.target.selectedIndex].dataset.subsubjectid
      setFormData({...formData, sub_subject: e.target.value, sub_subject_id: subSubjectId})
   }

   const setHandleImage = (e) => {
      setFormData({...formData, [e.target.name]: e.target.files[0] })
      setImage({...image, [e.target.name] : URL.createObjectURL(e.target.files[0])})
   }

   const removeImage1 = () => {
      image1.current.src="/images/upload-icon1.png";
      formData.image1 = undefined
      setFormData({...formData, ["image1"]: undefined })
      setCount((count)=>count =  count-1);
   }

   const removeImage2 = () => {
      image2.current.src="/images/upload-icon1.png";
      formData.image2 = undefined
      setFormData({...formData, ["image2"]: undefined })
      setCount((count)=>count =  count-1);
   }

   useEffect(()=>{
      if(formData.image1 && formData.image1 != undefined){
         setCount((count)=>count =  1);
      }
      if(formData.image2 && formData.image2 != undefined){
         setCount((count)=>count =  1)
      }
      if(formData.image1 && formData.image2 && formData.image1 != undefined && formData.image2 != undefined){
         setCount((count)=>count =  2)
      }
   },[formData])

   const askQuestion = async () => {
      // setFormData({...formData, user_Id : session.user._id, type :'QA'})
      if(state.Subscribe != "true"){
            history.push('/paynow')
      }else{
         if(formData.question === undefined){
            setError('You have not entered a valid question.')
            return;
         }
         if(formData.subject === undefined){
            setError('You have not selected a subject.')
            return;
         }
         if(formData.sub_subject === undefined){
            setError('You have not selected a sub subject.')
            return;
         }
         setError('')
         setIsLoading(true);
         let form = new FormData();
         form.append('question',formData.question)
         form.append('subject',formData.subject)
         form.append('subject_id',formData.subject_id)
         form.append('sub_subject',formData.sub_subject)
         form.append('sub_subject_id',formData.sub_subject_id)
         form.append('user_Id',formData.user_Id)
         form.append('email',formData.email)
         form.append('link',formData.link)
         form.append('name',formData.name)
         form.append('type',formData.type)
         form.append('image0',formData.image1)
         form.append('image1',formData.image2)
         mutation.mutate(form, 
            { onSuccess: (data, variables, context) => {
               // console.log(data)
               // queryClient.setQueryData(['notifications-false', { user_Id : session.user._id, type: 'QA'} ], data)
               if(data && data?.response?.status == 501){
                  setError('You Have Already asked 50 questions')
               }else{
                  setIsLoading(false)
                  history.push('/user/my-question')
               }
            },
            onError: (error, variables, context) => {
               // An error happened!
               console.log("in error")
               console.log(error,context,variables)
            },
         });
      }
   }

   // if(state.Subscribe == "false"){
   //    return <MyQuestion/>
   // }

   return(
      <>
      <DashboardNavbar data={user}/>
      <SideBar data={user}/>
      <section className="content user profile-page">
      <BlockHeader data={user} currentPage="Ask a Question"/>
      <div className="container-fluid">
         <div className="row clearfix mt-4">
            <div className="col-md-12">
               <div className="card student-list">
                  <div className="col-md-12 pt-3" style={{boxShadow: "-1px 3px 6px #f4750436"}}>
                     <div className="row page-nav-menu-row">
                        <div className="col-md-6 text-right">
                           <a className="active-nav font-weight-bold page-nav-menu" href="#">Ask a Question</a>
                        </div>
                        <div className="col-md-6 text-left">
                              <Link to="/user/my-question" className="font-weight-bold page-nav-menu">My Question Status</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12 mt-4 your_subscription ask_qus">
                     <h2>Ask a Question </h2>
                     <p>50 questions left for you to ask before the end of the cycle. Ask away!
                        {/* <span className="end_date1">Your cycle ends on 2022-01-31</span> */}
                     </p>
                     <p>Post your homework question and get notified when it has been answered. <span className="few_hours">We don’t take more than a few hours.</span></p>
                  </div>
                  <div className="col-md-12 mt-4 your_subscription ask_qus">
                     <div className="row">
                        <div className="col-md-12">
                           <form>
                              <div className="form-row">
                                 <div className="col-sm-6 col-md-6 form-group">
                                    <label className="mb-0">Main Subject</label>
                                    <select className="form-control" onChange={getSelectedSubject} name="subject">
                                       <option value="999">Select Subject</option>
                                       {subjects && subjects.data.map((item,key)=>{
                                          return(
                                             <option value={MakeSlug(item.subject)} key={key} data-subjectid={item._id}>{item.subject}</option>
                                          )
                                       })}
                                    </select>
                                 </div>
                                 <div className="col-sm-6 col-md-6 form-group">
                                    <label className="mb-0">Sub Subject</label>
                                    <select className="form-control" onChange={selectSubSubject} name="subsubject">
                                       <option value="Select Sub Subject">Select Sub Subject</option>
                                       {subsubjects && subsubjects.data.map((item,key)=>{
                                          return(
                                             <option value={item.sub_subject} key={key} data-subsubjectid={item._id}>{item.sub_subject}</option>
                                          )
                                       })}
                                    </select>
                                 </div>
                                 <div className="col-sm-6 col-md-6 form-group">
                                 {/* <CKEditor
                                    editor={ ClassicEditor }
                                    config={{
                                        toolbar: {
                                            items: [
                                                'MathType', 'ChemType','heading', 
                                                '|',
                                                'bold',
                                                'italic',
                                                'link',
                                                'bulletedList',
                                                'numberedList',
                                                'imageUpload',
                                                'mediaEmbed',
                                                'insertTable',
                                                'blockQuote',
                                                'undo',
                                                'redo'
                                            ]
                                        },
                                    }}
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        // console.log("Editor is ready to use!", editor);
                                        editor.editing.view.change(writer => {
                                          writer.setStyle(
                                            "height",
                                            "300px",
                                            editor.editing.view.document.getRoot()
                                          );
                                          writer.setStyle(
                                            "width",
                                            "465px",
                                            editor.editing.view.document.getRoot()
                                          );
                                        });
                                    }}
                                    data=""
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        setFormData({...formData, question: data})
                                    }}
                                 /> */}
                                    {/* <label className="mb-0">Question</label>
                                    <textarea name="editor1"></textarea> */}


                                    {/* new comment */}
                                    { editorLoaded ? <CKEditor
                                       editor = { ClassicEditor }
                                       config = {{
                                          toolbar: {
                                             items: [
                                                'MathType', 'ChemType','heading', 
                                                '|',
                                                'bold',
                                                'italic',
                                                'link',
                                                'bulletedList',
                                                'numberedList',
                                                'imageUpload',
                                                'mediaEmbed',
                                                'insertTable',
                                                'blockQuote',
                                                'undo',
                                                'redo'
                                             ]
                                          },
                                       }}
                                       onReady={ editor => {
                                          // console.log('Editor is ready to use!', editor);
                                          editor?.editing.view.change(writer => {
                                                writer.setStyle(
                                                "height",
                                                "300px",
                                                editor.editing.view.document.getRoot()
                                                );
                                          });          
                                       }}
                                       onChange={( event, editor ) => {
                                          const data = editor.getData();
                                          setFormData({ ...formData, question:data })
                                       }}
                                    /> 
                                    : 
                                    <p> Error! Kindly Reload </p> }
                                 </div>
                                 <div className="col-md-6 col-sm-6">
                                    <div className="row">
                                       {/* <div className="col-sm-12 col-md-12 form-group">
                                          <label className="mb-0">Child Sub Subject</label>
                                          <select className="form-control">
                                          </select>
                                       </div> */}
                                       <div className="col-sm-12 col-md-12 form-group">
                                          <div className="row upld_img_dbd">
                                             <div className="col-md-12">
                                                <label className="mb-0">Upload Images</label>
                                                <div className="col-md-12 p-0 image_quest">
                                                   <span> <i className="fa fa-image"></i> {count}/2 images</span>
                                                </div>
                                             </div>
                                             <div className="col-md-6 pr-0">
                                                <div className="images_pikar1">
                                                   <div className="upload-image">
                                                      <span className="pkr_img1"><i className="fa fa-camera"></i></span>
                                                      <input type='file' name="image1" className="imgInp" data-id='img1' onChange={setHandleImage}/>
                                                   </div>
                                                   <div className="upload_img_icon">
                                                      <img id="img1" src={image && image.image1 ? image.image1 : '/images/upload-icon1.png'} alt="your image" ref={image1}/>
                                                   </div>
                                                   {formData.image1 && <div className="time_hid" onClick={removeImage1}><span>x</span></div>}
                                                </div>
                                             </div>
                                             <div className="col-md-6 pl-0">
                                                <div className="images_pikar1">
                                                   <div className="upload-image"> 
                                                      <span className="pkr_img2"><i className="fa fa-camera"></i></span>
                                                      <input type='file' name="image2" className="imgInp"  data-id='img2' onChange={setHandleImage}/>
                                                   </div>
                                                   <div className="upload_img_icon">
                                                      <img id="img2" src={image && image.image2 ? image.image2 : '/images/upload-icon1.png'} alt="your image" ref={image2}/>
                                                   </div>
                                                   {formData.image2 && <div className="time_hid" onClick={removeImage2}><span>x</span></div>}
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-sm-12 col-md-12 form-group">
                                    <span style={{"color":"red"}}>{error}</span>
                                    <button type="button" className="btn btn-info" onClick={askQuestion}>{isLoading ? 'Posting' : 'Post a Question'}</button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <section className="section how_it_bg_img pt-4 pb-4">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-5 pl-0 text-center"><span><img src="/images/how_it_bg.jpg" className="img-fluid" alt=""/></span></div>
                           <div className="col-md-7">
                              <div className="Text_title text_tb_center3 pb-3">
                                 <h2>How It Work</h2>
                                 <ul className="include_list">
                                    <li><i className="fa fa-check-circle"></i> Post one question at a time.</li>
                                    <li><i className="fa fa-check-circle"></i> Keep questions specific and do not forget to add the necessary details.</li>
                                    <li><i className="fa fa-check-circle"></i> Our experts will work on your question.  </li>
                                    <li><i className="fa fa-check-circle"></i> You get notified once your answer is ready.</li>
                                    <li><i className="fa fa-check-circle"></i> Access the answer from 'My Question Status. </li>
                                 </ul>
                                 <div className="believe_pera">
                                    <p>We believe in working with honesty and integrity, just like you…” Learn more about our <a href="#" data-toggle="modal" data-target="#modal_CFSA" onClick={openDialog}>honor code</a></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </div>
   </section>

            {/* modal */}
            <div className={`modal fade ${modalClass}`} id="modal_CFSA" style={{display: `${display}`, overflowY: "scroll"}}>
               <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                     <div className="modal-header"> 
                        <button type="button" className="close" data-dismiss="modal" onClick={closeDialog}>&times;</button>
                     </div>
                     <div className="modal-body container pt-0 mt-4">
                        <div className="row">
                           <div className="col-md-12 pop_content_12">
                                 <p>Crazy for Study is your academic search engine and has always got your back. We feel your pain and understand have an understanding of the academic pressure a student faces. We also know that you believe in working with honesty and integrity and will never indulge in any misuse of the materials and services provided by Crazy for Study.</p>
                                 <h4>Misuse of material and services include:</h4>
                                 <ul>
                                 <li><strong>Copying:</strong> We do not expect you to copy any of the answers present on this website for your assignments and homework and present them as your work. Doing so means that you would be stealing someone else’s work.</li>
                                 <li> <strong>Cheating:</strong> We strongly advise you to not use Crazy for Study’s services for getting your graded assignments completed. Doing so would be unfair and will give you an unfair advantage over others.</li>
                                 <li><strong> Unfair gain:</strong> Using the materials, solutions, and assignments provided to you by Crazy for Study for unfair gains is wrong and one must not do it. We strictly prohibit our users from selling study material provided by CFS for their gain.</li>
                                 <p>Any user found guilty of misusing the content provided by Crazy for Study will have to face dreaded consequences. The violater’s account will be taken down. Students must not indulge in any unethical practices.</p>
                                 </ul>
                           </div>
                        </div>
                     </div>
                     <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeDialog}>Close</button>
                     </div>
                  </div>
               </div>
            </div>
         </>
      )
}