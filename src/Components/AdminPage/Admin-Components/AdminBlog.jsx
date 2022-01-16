import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'
import './adminBlog.css'
const AdminBlog = ( {blog ,ontoggle,Delete} ) => {
    useEffect(() => {
        
        console.log("11111111111",blog);
    }, [])
          
    return ( 
        <div className="col-12" style= {{ marginBottom:"50px", cursor:"pointer"}}>
        <div>
         <h5  style={{ display:"flex",justifyContent:"space-between", color:" #f2f7ff"}} >id =
                     {blog.id} <FaTimes className="icons" onClick={()=>{Delete(blog.id)}}  
                     style = {{ color:'red', cursor : 'pointer' }} /></h5>     
        </div>
        <div className={`blog ${ eval(blog.trending) ? 'trending':'' }`} onDoubleClick={()=>{ ontoggle(blog.id)}} >
            
        <div  >
        
                <img className="img1" src={"http://127.0.0.1:8000/"+blog.photo} alt="image" />
                <p style={{ marginBottom:"0px" ,fontSize:"17px" }} ><span style={{ marginRight:"10px" }} ><img src={"http://127.0.0.1:8000/"+blog.thumbnail} alt="" /></span>{blog.author}</p>
                <h4>{blog.title}</h4>
                
                <small style={{ fontSize:"15px"}} >{blog.date}</small>
               
        </div>
        </div>
    </div> 
     );
}
 
export default AdminBlog;