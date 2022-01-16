import './sidebar.css'
import { Link, useHistory } from 'react-router-dom';

const Sidebar = () => {
    let history = useHistory();
    return ( 
            <div>
                <div className="strap">
                    
                </div>
            <div className="m1">
                
                <div className="head">
                    <Link className="link1" to="/">
                    <h2>BONDS</h2>
                    </Link>
                </div>
                <ul>
                    <li><Link to="/admin/dashboard" className="l1">Dashboard</Link></li>
                    <li><Link to="/admin/users" className="l1">Users</Link></li>
                    <li><Link to="/admin/addBlog" className="l1">Add Blogs</Link></li>
                    <li style={{ cursor:"pointer" }} onClick={()=>{history.push('/admin');localStorage.removeItem('login1') }} className="l1" >log out</li>

                </ul>
            
        </div>
        </div>
         );
}
 
export default Sidebar;