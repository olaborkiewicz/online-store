import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container_foot}>
            <div className={styles.left}>
                <p className={styles.left}>MamStajla © 2023. Made with ShopPress.pl</p>
            </div>
            <div className={styles.right}>
                <FaFacebookF className={styles.icon} />
                <FaInstagramSquare className={styles.icon} />
            </div>
        </div>
    );
}

export default Footer;