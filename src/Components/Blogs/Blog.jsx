import { useEffect } from 'react'
import './blogs.css'
import {Link} from 'react-router-dom';
import Aos from 'aos';
import Form from '../form';
import axios from 'axios';
const Blog = ({ blog,info,login  }) => {
    useEffect(() => {
        Aos.init({duration :3000});
  
    }, [])

    function user_fav(){
           console.log("blog_id",blog.id);
           console.log("user_id ",info.id);

           var data={
              user_id : info.id,
              blog_id : blog.id 
           }
           axios.post('http://127.0.0.1:8000/api/userfav',data,{
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            
          }
        }).then(function (response) {
          console.log("response",response);
          
        })
        .catch(function (error) {
          console.log(error);
        });

    }


    if(login){
    return ( 
    <div className="col-12" style= {{ marginBottom:"30px"}}>
         
            
        
            <div data-aos="fade-right"  className="blogs">   
            <Link to={`/home/fullblog/${blog.id}`}>
                <img className="img1" src={"http://127.0.0.1:8000/"+blog.photo} alt="image" />
                <p style={{ marginBottom:"0px" ,fontSize:"17px" }} ><span style={{ marginRight:"10px" }} ><img src={"http://127.0.0.1:8000/"+blog.thumbnail} alt="" /></span>{blog.author}</p>
                <h4>{blog.title}</h4>
              
                        
                <small style={{ fontSize:"15px"}} >{blog.date}</small><br />
                <small style={{ fontSize:"12px"}} ><span style={{ fontWeight:"bold",marginRight:"20px" }} >category </span> {blog.category}</small><br />
                
                <small  style={{ fontSize:"12px"}} ><span style={{ fontWeight:"bold",marginRight:"20px" }} >read time </span> {blog.readtime}</small><br />
                </Link> 
                <svg id="icn" style={{   cursor:"pointer" }} onClick={user_fav}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                     <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"/>
                </svg>
            </div>
               
        </div>
        
     
    );}else{
        
        return ( 
            <div className="col-12" style= {{ marginBottom:"30px"}}>
                 
                    
                
                    <div data-aos="fade-right"  className="blogs">   
                    <Link to={`/home/fullblog/${blog.id}`}>
                        <img className="img1" src={"http://127.0.0.1:8000/"+blog.photo} alt="image" />
                        <p style={{ marginBottom:"0px" ,fontSize:"17px" }} ><span style={{ marginRight:"10px" }} ><img src={"http://127.0.0.1:8000/"+blog.thumbnail} alt="" /></span>{blog.author}</p>
                        <h4>{blog.title}</h4>
                      
                                
                        <small style={{ fontSize:"15px"}} >{blog.date}</small><br />
                        <small style={{ fontSize:"12px"}} ><span style={{ fontWeight:"bold",marginRight:"20px" }} >category </span> {blog.category}</small><br />
                        
                        <small  style={{ fontSize:"12px"}} ><span style={{ fontWeight:"bold",marginRight:"20px" }} >read time </span> {blog.readtime}</small><br />
                        </Link> 

                    </div>
                       
                </div>
                
             
            );
    }
}
 
export default Blog;