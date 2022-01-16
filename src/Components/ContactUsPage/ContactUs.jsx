import Navbar from "../navbar"
import ContactSection from "./ContactSection"
import Footer from "./footer"

const ContactUs = ({ info,login }) => {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <Navbar info={info} login={login} />
            </div>
            <div className="row">
                <ContactSection/>
            </div>
            <div className="row">
                <Footer/>
            </div>
        </div>
     );
}
 
export default ContactUs;