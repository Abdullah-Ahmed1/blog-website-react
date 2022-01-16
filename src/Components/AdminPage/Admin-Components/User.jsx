import { FaTimes } from 'react-icons/fa'
import { useEffect } from "react";
const User = ( {item, onDelete} ) => {
   // let {item, onDelete}=props;
    console.log("89898989",item)
    return ( 
        <div>
            
            <div style={{ marginBottom:"10px" }}  className="card">
                <div className="card-header">
                    <h5  style={{ display:"flex",justifyContent:"space-between"}} >id =
                     {item.id} <FaTimes className="icons"   onClick={()=>onDelete(item.id)}
                     style = {{ color:'red', cursor : 'pointer' }} /></h5>
                    
                </div>
                <div className="card-body">
                    <h6 className="card-title">Name = {item.name}</h6>
                    <h6 className="card-text">Date of birth  = {item.DOB}</h6>
                    <h6 className="card-text">Email  = {item.email}</h6>
                    <h6 className="card-text">Password = {item.password}</h6>
                    
                </div>
            </div>
        </div>
     );
}
 
export default User;