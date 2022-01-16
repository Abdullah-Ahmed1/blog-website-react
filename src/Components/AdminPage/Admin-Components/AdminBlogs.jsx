import React from 'react'
import Blogs from '../../Blogs/blogList'
import AdminBlog from './AdminBlog'
import { useState,useEffect } from 'react'
import axios from "axios";

const AdminBlogs = ( {items,front,handleDelete} ) => {
  
    
    useEffect(() => {
              }, []);

     

      const handleToggle=(id)=>{
        
        var data = {
            trending : String(!(eval((items.filter(item=> item.id===id )[0]).trending)))
        };
        console.log("12345689",data.trending);

        
         axios.post(`http://127.0.0.1:8000/api/updatetrending/${id}`,data,

        )
        .then(response=>{
            console.log("res",response);
            
        })
       front(id);
    }

    const Delete= async (id)=>{
        await axios.delete(`http://127.0.0.1:8000/api/deleteblog/${id}`)
        .then(response=>console.log("delete  blog success"));


        handleDelete(id);
    }



    

    return ( 
        <React.Fragment>
            {items.map((blog=>{
                return  <AdminBlog key={blog.id} blog={blog} Delete={Delete} ontoggle={handleToggle} />
            }))}            
        </React.Fragment>
     );
}
 
export default AdminBlogs;