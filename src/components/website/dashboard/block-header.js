import { Link } from 'react-router-dom';

export default function BlockHeader({...props}){
    return(
        <div className="block-header">
            <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">
            <h2>Welcome, {props.data && props.data.Name} 
                    <small>Student, {props.data && props.data.college}</small>
                </h2>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
                <ul className="breadcrumb float-md-right">
                    <li className="breadcrumb-item">
                    {/* <Link to="/dashboard">Dashboard</Link> */}
                    </li>
                    {props?.currentPage ? <li className="breadcrumb-item active"><a href="#">{props?.currentPage}</a></li>:""}
                </ul>
            </div>
            </div>
        </div>
    )
}