import Users from "./Admin-Components/Users";
import Sidebar from "./Admin-Components/Sidebar";
const AdminUsersPage = () => {
    return ( 
        <div style={{ padding:"0px" }} className="container-fluid">
            <div className="row">
                
            </div>
            <div className="row" >
                <div className="col col-xl-2">
                    <Sidebar/>
                </div>
                <div style={{ marginTop: "20px" }} className="col col-xl-9">
                    <Users/>
                </div>
            </div>
        </div>
     );
}
 
export default AdminUsersPage;