import './profile.css'
const Profile = ( {info} ) => {
    return ( 
        <div style={{ marginTop:"100px"}}  className="container" >
            <div className="row">
                <div className="col">
                    <h1 style={{ marginBottom:"40px" }}>Personal Details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <ul id="list" >
                    <li><span>Name  </span  >{info.name}</li>
                    <li><span>Email  </span>{info.email}</li>
                    <li><span style={{ marginRight:"62px" }} >DOB</span  >{info.DOB}</li>
                </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;