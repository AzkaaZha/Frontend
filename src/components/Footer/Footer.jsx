import styles from './Footer.module.css';

function Footer(){
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__tittle}>
                    Movie App
                </h2>
               <p className={styles.footer__description}>2024 All Rights Reserved. By Zharari.Azka</p>
            </footer>
        </div>
    );
}

export default Footer;