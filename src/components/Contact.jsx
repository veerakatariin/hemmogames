import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {

    return(
        <div className="text">
            <p className="contactText">Löydät meidät myös</p>

                <div className="container">
                    <div className="contactBlock">
                        <p>Instagram</p>
                        <FaInstagram
                        value={{ size: '500px' }}/>
                    </div>
                    <div className="contactBlock">
                        <p>Facebook</p>
                        <FaFacebook/>
                    </div>
                    <div className="contactBlock" >
                        <p>Tiktok</p>
                        <FaTiktok/>
                    </div>
                </div>

        </div>
    )
}


export default Contact;