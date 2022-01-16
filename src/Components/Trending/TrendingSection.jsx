import { useState,useEffect } from "react";
import TrendingElements from "./TrendingElements";

const Trendingsection = ( { trendings,blogs }) => {
    const [items,setItems] =useState([]);
     useEffect(() => {
   
    }, [])

    return ( 
        <div className="container" style={{ padding:"0px" }} >
            <div className="row-12" style={{ margin:"30px 0px",color:"#0B409C" }}>
                <strong ><svg style={{margin:"5px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill" viewBox="0 0 16 16">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
</svg>TRENDING ON BONDS</strong>
            </div>
            <div className ="row justify-content-center" style={{ margin:"0px" }}>
            <TrendingElements trendings = {trendings}  blogs={blogs}  />
            </div>
        </div>
        
     );
}
 
export default Trendingsection;