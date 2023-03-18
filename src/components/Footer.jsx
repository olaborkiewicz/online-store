import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="container_foot">
            <div className="left">
               MamStajla © 2023. Made with ShopPress.pl
            </div>
            <div className="right">
         <FaFacebookF className="icon"/>
         <FaInstagramSquare className="icon"/>
            </div>
        </div>
    );
}

export default Footer;