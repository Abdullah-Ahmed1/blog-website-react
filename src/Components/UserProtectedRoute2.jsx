import React from "react";
import { Route,Redirect } from "react-router-dom";

const UserProtectedRoute2 = ({isAuth,component:Component,...rest}) => {
    return <Route {...rest} render={(props)=>{
        console.log("123456",isAuth());
        if((isAuth())){
            
            return <Redirect to={{pathname:'/' ,  state:{ from:props.location }  }}  />
        }else{
            return <Component/>
        }
    }}
     />;
     
}
 
export default UserProtectedRoute2;