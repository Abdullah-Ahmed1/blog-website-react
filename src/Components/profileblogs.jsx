import React from "react";
import { useEffect,useState } from "react";
import Profileblog from "./Profileblog";
import axios from "axios";
const Profileblogs = ({selectedBlogs}) => {
  //  console.log("blogssssssssss123",selectedBlogs)
 
    useEffect(() => {
       
       
    }, [])
    return ( 

        <React.Fragment>
          {
            selectedBlogs.map((selectedBlog)=> {
                  return  <Profileblog  key={selectedBlog.id} blog={selectedBlog} />
              } )
          }         
    </React.Fragment>
     );
}
 
export default Profileblogs;