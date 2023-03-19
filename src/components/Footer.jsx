import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../App.css";

const Footer = () => {
    return (
        <div className={styles.container_foot}>;
            <div className={styles.left}>
               <p className={styles.left}>MamStajla © 2023. Made with ShopPress.pl</p>
            </div>
            <div className={styles.right}>
         <FontAwesomeIcon icon="fa-brands fa-square-facebook" className={styles.icon} />
         <FontAwesomeIcon icon="fa-brands fa-square-instagram" className={styles.icon}/>
            </div>
        </div>
    );
}

export default Footer;