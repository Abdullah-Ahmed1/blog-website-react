import React from 'react';
import { useEffect,useState } from "react";
import User from './User';
const axios= require('axios');

const Users = () => {
   const [items,setItems]= useState([]);
   useEffect(() => {
      async function fetchData(){
         return fetch('http://localhost:8000/api/user')
         .then(data=>data.json())
      } ;
      let mounted = true;
      fetchData()
      .then(items=>{
         if(mounted){
            console.log("------------->",items);
            setItems(items)
         }
         console.log("!!!!!!!!",items);
      })
      return()=> mounted = false;
   }, [])

    const deleteUser = async (id)=>{
      console.log("id",id);
      console.log("items",items);
      setItems(items.filter((item)=>item.id !== id));
         await axios.delete(`http://127.0.0.1:8000/api/deleteUser/${id}`)
         .then(response=>console.log("delete success"));
 
      
      
    }
    return ( 
       <React.Fragment>
          <div style={{ padding:"30px",margin:"20px 0px", backgroundColor:"yellow" }} >
             <h4>Total users = {items.length}</h4>
          </div>
          {items.map(item=>{
             return <User key={item.id} onDelete={deleteUser} item ={item}/>
          })}
       </React.Fragment> 
     );
}
 
export default Users;