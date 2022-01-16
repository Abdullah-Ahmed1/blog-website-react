import './blogs.css'
import Blogs from "./Blogs"

const BlogSection = ({ blogs,info,login }) => {
    return ( 
        <div  style={{ minHeight:"550px" }} className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 order-md-last order-sm-last order-xs-last order-lg-first order-xl-first ">
                    <div className="row">
                        <Blogs blogs={blogs}  info={info} login = {login} ></Blogs>                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <div className="catagories" style={{ marginLeft:"60px" }}>
                    <h5>Dicover more on BONDS</h5>
                        <p><a href="#">Computer Science</a> </p>
                        <p><a href="#">Politics</a></p>
                        <p><a href="#">History</a></p>
                        <p><a href="#">Computings</a> </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BlogSection;