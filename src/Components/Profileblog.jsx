//import './AdminPage/Admin-Components/adminBlog.css'
import { Link } from 'react-router-dom';
import './profileblog.css'
const Profileblog = ( {blog}) => {
    console.log("reached")
    return ( 
        <div>
            <Link to={`/home/fullblog/${blog.blog_id}`} >
             <div className="col"  id="main" >
                
                    
                        
                        <div style={{  }}  >
                        
                        <p style={{ marginBottom:"0px" ,fontSize:"17px" }} ><span style={{ marginRight:"10px" }} ><img src={"http://127.0.0.1:8000/"+blog.thumbnail} alt="" /></span>author</p>
                        <h4>{blog.title}</h4>
                        
                        <small style={{ fontSize:"15px"}} >{blog.date}</small>
                    
                </div>
                <img className="img1" src={"http://127.0.0.1:8000/"+blog.photo} alt="image" />
            </div> 
            </Link>
        </div>
     );
}
 
export default Profileblog;