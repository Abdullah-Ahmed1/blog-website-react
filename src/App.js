import {
  BrowserRouter as Router,
  
  Route,
  
} from "react-router-dom";
import { Switch } from "react-router";
import { useEffect,useState } from "react";

import 'aos/dist/aos.css';
import './App.css';

import Home from './Components/homePage'
import Form from './Components/form';
import LoginForm from "./Components/LoginForm";
import AdminPage from "./Components/AdminPage/AdminPage";
import AdminUsersPage from "./Components/AdminPage/AdminUsersPage";
import ContactUs from "./Components/ContactUsPage/ContactUs";
import AddBlogpage from "./Components/AdminPage/AddBlogPage";
import FullBlog from "./Components/Blogs/FullBlog";
import axios from "axios";
import UserProfile from "./Components/UserProfile";
import AdminLoginForm from "./Components/AdminLoginForm";
import UserProtectedRoute from "./Components/UserProtectedRoute";
import AdminProtectedRoute from "./AdminProtectedRoute";
import UserProtectedRoute2 from "./Components/UserProtectedRoute2";
import AdminProtectedRoute2 from "./AdminProtectedRoute2";


const validateAdmin=()=>{
  if(localStorage.getItem('login1')){
    return true;
  }else{
    return false;
  }
}



const validateUserToken = (token) => new Promise((resolve, reject) => {
    axios.post('http://127.0.0.1:8000/api/me',null,{
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization": token 
      }
    }).then(function (response) {
      resolve(true)
    })
    .catch(function (error) {
      reject(false)
    });
})

const checkUserSession = () => {
  if (localStorage.getItem('token')) {
    let value = JSON.parse(localStorage.getItem('token'));
    let token ='Bearer ';
    if(value!==null){
      token = token +value.token;
    }
    return validateUserToken(token).then((res)=> {
      return true
    }).catch(()=> {
      console.log('----------')
      return false
    })
  } else {
    console.log('===========')
    return false;
  }
}
function App() {
  
  
  const [login,setLogin] = useState(false);
  const [info, setInfo] = useState({});
  const [isAuth,setIsAuth]=useState(localStorage.getItem('token'));
  const [isAdminAuth,setIsAdminAuth]=useState(localStorage.getItem('login1'));  
  useEffect(() => {
    
      //   let value = JSON.parse(localStorage.getItem('token'));
      //   let token ='Bearer ';
      //   if(value!==null){
      //     token = token +value.token;
      //   }
      
      
      // console.log(token);
      // if(token !==null){
      //   //auth();
      //   axios.post('http://127.0.0.1:8000/api/me',null,{
      //     headers:{
      //       "Content-Type":"application/json",
      //       "Accept":"application/json",
      //       "Authorization": token 
      //     }
      //   }).then(function (response) {
      //     console.log("response",response.data);
      //     setLogin(true);
      //     setInfo(response.data);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
        
      // }else{
      //   setLogin(false);
      // }

 



      
  }, []);



  
 



  return (
    <div className="App">
        <Router>
        <Switch>
          
        <Route exact path="/admin"><AdminLoginForm /></Route>
        {/* <AdminProtectedRoute2 path="/admin" component={AdminLoginForm}  isAuth={}  /> */}
        <AdminProtectedRoute path="/admin/dashboard" component={AdminPage}  isAuth={validateAdmin} />
        <AdminProtectedRoute path="/admin/addBlog" component={AddBlogpage}  isAuth={validateAdmin} />
        <AdminProtectedRoute path="/admin/users" component={AdminUsersPage}  isAuth={validateAdmin} />
        
        <Route exact path="/home/fullblog/:blogId" ><FullBlog  /></Route>
        <UserProtectedRoute2 path="/signUp" component={Form} isAuth={checkUserSession }  />
        
        {/* <Route exact path="/home/profile"><UserProfile  info={info}   login={login} /> </Route> */}
        <UserProtectedRoute path="/home/profile" component={UserProfile} isAuth={checkUserSession}  />
        <UserProtectedRoute2 path="/login" component={LoginForm} isAuth={checkUserSession}  />
        {/* <Route exact path="/login"><LoginForm info={info} login={login} /></Route>  */}
        <Route exact path="/contactUs"><ContactUs info={info} login={login} /></Route> 
        <Route exact path="/" ><Home  /></Route>   
        </Switch>
        </Router>
    </div>
  );
}

export default App;
