import Blog from "./Blog"
import React from "react";
const Blogs = ({ blogs,info, login }) => {
    return (
        <React.Fragment>
            {blogs.map((blog)=>{
                return <Blog key={blog.id} blog={blog}  info={info} login = {login}  ></Blog>
            })}
        </React.Fragment>
     );
}
 
export default Blogs;