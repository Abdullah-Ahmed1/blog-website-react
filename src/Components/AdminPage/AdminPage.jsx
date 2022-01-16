import { useEffect,useState } from "react";
import { useHistory } from "react-router";
import Dashboard from "./Admin-Components/Dashboard"
import Sidebar from "./Admin-Components/Sidebar"

const AdminPage = () => {
    const history  = useHistory();
   useEffect(() => {
      if(!(localStorage.getItem('login1'))){
        history.push('/admin')
      }
   }, [])
    
    return ( 
        <div style={{ padding:"0px" }} className="container-fluid">
            <div className="row">
                
            </div>
            <div className="row" >
                <div className="col col-xl-2">
                    <Sidebar/>
                </div>
                <div className="col col-xl-9">
                    <Dashboard  />
                </div>
            </div>
        </div>
     );
}
 
export default AdminPage;