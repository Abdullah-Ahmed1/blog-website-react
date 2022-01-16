import AddBlogForm from "./Admin-Components/AddBlogForm";
import Sidebar from "./Admin-Components/Sidebar";

const AddBlogpage = () => {
    return ( 
        <div style={{ padding:"0px" }} className="container-fluid">
        <div className="row">
            
        </div>
        <div className="row" >
            <div className="col col-xl-2">
                <Sidebar/>
            </div>
            <div className="col col-xl-10">
              <AddBlogForm/>
            </div>
        </div>
    </div>
     );
}
 
export default AddBlogpage;