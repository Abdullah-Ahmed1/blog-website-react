
import { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from './logo2.png'
import './form.css'
import Aos from 'aos';
import $, { event } from 'jquery';

require("jquery-validation");
const Form = () => {
    let history = useHistory();
    useEffect(() => {
        Aos.init({duration :1000});

       // console.log("1222222",$("input[name='name']").val());

        
            $("form[name='SignUp']").validate({
                // Specify validation rules
                rules: {
                  // The key name on the left side is the name attribute
                  // of an input field. Validation rules are defined
                  // on the right side
                      name: {
                    required: true,
                  },
                  
                  email: {
                    required: true,
                    // Specify that email should be validated
                    // by the built-in "email" rule
                    email: true
                  },
                  password: {
                    required: true,
                    minlength: 5
                  },
                  repassword:{
                      equalTo:"#password"
                  }
                },
                // Specify validation error messages
                messages: {
                  firstname: "Please enter your firstname",
              
                  password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                  },
                  repassword:{
                    equalTo:"The password is not matching the above field"
                  },
                  email: "Please enter a valid email address"
                }
               
        });

      

    }, []);


   
        // Initialize form validation on the registration form.
        // It has the name attribute "registration"
        const [name,setName]=useState("");
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        const [repassword,setRePassword]=useState("");
        const [DOB,setDOB]=useState("");
    
        async function datasend(event){
            event.preventDefault()
            var items= {name,email,password,repassword,DOB};
            

           let result= await fetch("http://localhost:8000/api/register",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify(items)
            });
            result=await result.json();
           
           
        };

        const redrive=()=>{
            
         history.push('/logIn');
        }
        function SignUp(event){
            if($("form[name='SignUp']").valid()){
                console.log("its working");
                datasend(event);
                redrive();
                
            }
                
            
        }

    return ( 
        <div  className="main1">
        <div className="container-fluid">
           <div className="r1 row-12 ">
               <div className="col">
                    <nav data-aos="fade-right" className="navbar">
                        <Link style={{ color:"#fdbe34", fontSize:"40px" }} to="/" className="navbar-brand">
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
                    
               </div>
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <form data-aos ="fade-left" data-aos-anchor=".other-element" className="f1" name="SignUp" >
                      <h2 style={{ textAlign:"center", fontWeight:"bolder" }} >BONDS</h2>
                      <div className="form-goup">
                          <label htmlFor="name">Name</label>
                          <input type="text" name="name" value={name}  onChange={(e)=>setName(e.target.value)}     className="form-control"  placeholder="Enter name" required/>
                      </div>
                      <div className="form-goup">
                          <label htmlFor="name">Email</label>
                          <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" placeholder="Enter email" required/>
                      </div>
                      <div className="form-goup">
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Enter passowrd" required/>
                      </div>
                      <div className="form-goup">
                          <label htmlFor="name">Re-enter Password</label>
                          <input type="password" name="repassword" value={repassword} onChange={(e)=>{setRePassword(e.target.value)}} className="form-control" placeholder="Re-enter passowrd" required/>
                      </div>
                      <div className="form-goup">
                          <label htmlFor="name">Date of Birth</label>
                          <input type="date" name="DOB"  value={DOB} onChange={(e)=>{setDOB(e.target.value)}} className="form-control" required/>
                      </div>
                      <div className="form-goup"  > 
                          
                          <button id="inpt1" onClick={SignUp} >Sign Up</button>
                      </div>
                  </form>
               </div>
           </div>
        </div>
       </div>
      
     );
}
 
export default Form;
