import Blogs from '../../Blogs/Blogs'
import './dashboard.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import blogs from '../../Blogs/blogList'
import AdminBlogs from './AdminBlogs'
const Dashboard = ( {ontoggle} ) => {
    const [items,setItems] =useState([]);
    useEffect(() => {
        async function get(){
            let response = await axios.get('http://127.0.0.1:8000/api/listblog',{
              headers:{
                "Content-Type":"application/json",
                
              }
            }).then  ( await function (response) {
              console.log("response123",response.data);
              
              setItems(response.data);
            })
            .catch(function (error) {
              console.log(error);
            
            }); 
        }

        get();

        
    }, [])
    const front=(id)=>{
        console.log("reached",id);
        console.log("test1",items);
      setItems(items.map((item)=> item.id ===id ? { ...item , trending : !(eval(item.trending)) } : item))
      console.log("test2",items)
    };
    const handleDelete=(id)=>{
        console.log("handledlete reached",id);
        setItems(items.filter((item)=> item.id !==id))
    }


    return ( 
        <div style={{ paddingTop:"10px" }} className="container">
            <div style={{ backgroundColor:"white",padding:"10px" }} className="row">
                <div  className="col-4">
                    <div className="total">
                        <h2>Total Blogs</h2>
                        <h4>{items.length}</h4>
                    </div>
                </div>
                <div className="col-4">
                    <div className="total">
                        <h2>Trending</h2>
                        <h4>6</h4>
                    </div>
                </div>
              
            </div>
            <div className="row">
                <div className="col-12">
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className="row">
                          <AdminBlogs  items={items} ontoggle={ontoggle} handleDelete={handleDelete} front={front} />  
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;