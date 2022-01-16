
import Nav2 from "./Nav2";
import Profile from "./profile";
import { useState,useEffect } from "react";
import axios from "axios";
import Profileblogs from "./profileblogs";

const UserProfile = () => {
    const [info, setInfo] = useState({});
   const [login, setLogin] = useState(false);
   const [joined, setJoined] = useState([]);
   
   
    useEffect(() => {
    async  function me(){
      let value = JSON.parse(localStorage.getItem('token'));
      let token ='Bearer ';
      if(value!==null){
        token = token +value.token;
      }
    console.log(token);

    if(token !==null){
      //auth();
      await axios.post('http://127.0.0.1:8000/api/me',null,{
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization": token 
        }
      }).then(function (response) {
        console.log("1111response",response.data);
        localStorage.setItem("user_id",(response.data).id)
        setLogin(true);
        setInfo(response.data);

        axios.get(`http://127.0.0.1:8000/api/userselected/${(response.data).id}`,{
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json",
               
            }
          }).then(function (response) {
            console.log(" join response",response.data);
            setJoined(response.data);
          })
          .catch(function (error) {
            console.log(error);
     
          });






      })
      .catch(function (error) {
        console.log(error);
        localStorage.clear();
      });
      
    }else{
      setLogin(false);
    };
  }

      me();
      
 
    }, [])

    return ( 

        <div   className="container-fluid" >
            
                <Nav2  info={info} login={login} />
          <div className="row">
                 <Profile info={info} />
                 </div> 
                 <div style={{ marginLeft:"200px",marginTop:"20px" }} className="row">
                   <h1>Favourite Blogs</h1>
                   </div> 
                 <div className="row"  >
                <Profileblogs  info={info} selectedBlogs={joined}   />
                </div>

        </div>
     );
}
 
export default UserProfile;