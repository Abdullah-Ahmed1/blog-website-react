import React from "react";
import TrendingElement from "./TrendingElement";

const TrendingElements = ({ trendings,blogs }) => {
    return ( 
    <React.Fragment>
    {
    blogs.filter((blog)=>{
        if(blog.trending==="true"){
            return blog;
        }
    })    
    .map(blog=>{
        return <TrendingElement key={blog.id} trending={blog}  />
    })
    
    }
    </React.Fragment> 
    );
}
 
export default TrendingElements;