import banner from './banner1.png'
const Banner = () => {
    return ( 
        <div style={{ height:"100%" }} className="d-none  d-lg-block">
            <img src={banner} alt="banner" className ="img-fluid" style={{ width:"100%",height:"250%",borderBottom:"#393e46 solid 1px" }} />
        </div>
     );
}
 
export default Banner;