import './navbar.css'
import { useHistory } from 'react-router';
import logo from './logo2.png'
import {Link} from 'react-router-dom';
const Nav2 = ( { info,login  } ) => {
    let history = useHistory();

    function logout(){
        localStorage.clear();
        history.push('/logIn');

    }
    return ( 
        <div>
             <nav className=" navbar-custom navbar fixed-top navbar-inverse bg-inverse navbar-expand-lg  " >
              <div className="container-fluid" >
                <a className="navbar-brand" href="/"><span><img src={logo} alt="logo" style={{ maxWidth: "55px" }} /></span>BONDS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-custom1 collapse navbar-collapse" id="navbarNav">
                   
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                       
                        
                        </ul>
                        <h6 id="welcome" >welcome {info.name}!</h6>
                        <div id="drop">
                        <svg id="option"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                        </svg>
                        <div id="content" >
                            <Link to="/home/profile" ><p>show profile</p></Link>
                            <p onClick={logout} >logout</p>
                        </div>

                        </div>
                        {/* <Link to="/signUp"><button className="btn-signUp" >Sign Up</button></Link>
                        <Link to="/logIn"><button className="btn-signUp" >Login</button></Link> */}
                        
                </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Nav2;