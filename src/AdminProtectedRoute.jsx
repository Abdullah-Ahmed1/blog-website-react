import React from "react";
import { Route,Redirect } from "react-router-dom";

const AdminProtectedRoute = ({isAuth,component:Component,...rest}) => {
    return <Route {...rest} render={(props)=>{
        if(isAuth()){
            return <Component/>
        }else{
            return <Redirect to={{pathname:'/admin' ,  state:{ from:props.location }  }}  />
        }
    }}
     />;
     
}
 
export default AdminProtectedRoute;