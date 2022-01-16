import { Link, useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './form.css';
import Aos from 'aos';

import $ from 'jquery';
import logo from './logo2.png';
require("jquery-validation");
const AdminLoginForm = () => {
    let history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    useEffect(() => {
        Aos.init({duration :1000});



        $("form[name='LogIn']").validate({
            // Specify validation rules
            rules: {
              // The key name on the left side is the name attribute
              // of an input field. Validation rules are defined
              // on the right side
              
              email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
              },
              password: {
                required: true,
                minlength: 5
              }
            },
            // Specify validation error messages
            messages: {
             
          
              password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
              },
              email: "Please enter a valid email address"
            }
           
    });
    }, [])

    function verify(event){
        event.preventDefault();
       var emailcheck = "admin@gmail.com";
       var passcheck = "admin";
       if(emailcheck == email && passcheck==password){
           console.log("verified");
           localStorage.setItem('login1','true')
           setTimeout(() => {
            
            history.push('/admin/dashboard'); 

          }, 5000)
           
       }else{
        window.alert("invalid creddentials")
       }
    
    }
    
    function login(event){
        if($("form[name='LogIn']").valid()){
            console.log("its working");
            verify(event);
        }
        
    
    }
    




   
    return ( 
        <div>
            <div  className="main1">
        <div className="container-fluid">
           <div className="r1 row-12 ">
               <div className="col">
                    <nav data-aos="fade-right" className="navbar">
                        <Link style={{ color:"#fdbe34", fontSize:"40px" }}  className="navbar-brand">
                            <img  style={{ maxWidth:"100px" }} src={logo} alt="logo" />
                            BONDS
                        </Link> 
                    </nav>                
               </div>
               <div className="col">
                    
               </div>
           </div>
           <div className="row">
               <div className="col-6">
               <h1 data-aos ="fade-right" style={{ color:"#fdbe34", fontSize:"100px",marginTop:"80px",fontFamily:"Lobster" }} >Admin Panel</h1>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <form data-aos ="fade-left" data-aos-anchor=".other-element" className="f1" name="LogIn" action="">
                      <h2 style={{ textAlign:"center", fontWeight:"bolder" }} >BONDS</h2>
 
                      <div className="form-goup">
                          <label htmlFor="name">Email</label>
                          <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" placeholder="Enter email" required/>
                      </div>
                      <div className="form-goup">
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password"  value={password}  onChange={(e)=>setPassword(e.target.value)}   className="form-control" placeholder="Enter passowrd" required/>
                      </div>

                     
                      <div className="form-goup"  > 
                          
                          <button id="inpt1" onClick={login}  >Login</button>
                      </div>
                  </form>
               </div>
           </div>
        </div>
       </div>

        </div>
     );
}
 
export default AdminLoginForm;