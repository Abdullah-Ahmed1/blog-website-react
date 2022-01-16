//import image1 from './icon1.png'
import './trendingElement.css'
import { useEffect } from 'react';
import './trending.css'
import Aos from 'aos';
const TrendingElement = ( { trending }) => {
        useEffect(() => {
            Aos.init({duration :2000});
      
        }, [])
    return ( 
        <>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 " style= {{ marginBottom:"30px",marginRight:"0px"}}>
               <div data-aos="fade-left" data-aos-anchor=".other-element" id="trend"  >
                    <p id="heading" style={{ marginBottom:"0px" }} ><span style={{ marginRight:"10px" }} ><img src={trending.thumbnail} alt="" /></span>{trending.author}</p>
                    <h6>{trending.title}</h6>
                    <small>{trending.date}</small>
                </div>
            </div> 
        </>
     );
}
 
export default TrendingElement;