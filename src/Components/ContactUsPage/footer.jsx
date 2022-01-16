import './footer.css'
const Footer = () => {
    return ( 
        <div id="con" className="col-12">
            <div className="row" >
                <div className="col">
                    <h2>BONDS</h2>
                </div>
                <div className="col">
                    <h4>Links</h4>
                    <ul>
                        <li>Newsletter </li>
                        <li>Social media</li>
                        <li>Contact Us</li>
                        <li>Our team </li>
                        <li>About Us</li>
                    </ul>
                </div>

            </div>
            <div id="main1" className="row">
            <div id="copy">© 2020 Copyright:
                <a style={{ marginLeft:"5px" }} href=" https://fourasol.com">fourasol.com</a>
            </div>
            </div>
        </div>
     );
}
 
export default Footer;