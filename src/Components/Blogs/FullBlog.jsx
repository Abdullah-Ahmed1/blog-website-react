import {useParams} from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

const FullBlog = ( { blogs } ) => {
    let   {blogId}   = useParams();
   
   // console.log("12112",blogs);
   const [item,setItem] =useState({});   

   useEffect(() => {
    
    async function get(){
        let response = await axios.get(`http://127.0.0.1:8000/api/blogitem/${blogId}`,{
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            
          }
        }).then  ( await function (response) {
            console.log("response",response.data[0].title);
            setItem(response.data[0]);
        })
        .catch(function (error) {
          console.log(error);
          localStorage.clear();
        });
      }
  
      get();

      console.log("items",item)
    }, [])
    
        
    
        return ( 
        <div>
            <h1>this is the full blog page is {blogId} </h1>  
            <h2>item </h2>
            <h5>b</h5>  
        </div>
     );
}
 
export default FullBlog;