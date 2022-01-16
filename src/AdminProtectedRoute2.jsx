import React from "react";
import { Route,Redirect } from "react-router-dom";

const AdminProtectedRoute2 = ({isAuth,component:Component,...rest}) => {
    return <Route {...rest} render={(props)=>{
        if(!isAuth){
            return <Component/>
        }else{
            return <Redirect to={{pathname:'/admin/dashboard' ,  state:{ from:props.location }  }}  />
        }
    }}
     />;
     
}
 
export default AdminProtectedRoute2;