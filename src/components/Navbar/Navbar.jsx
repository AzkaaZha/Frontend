import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <div>
                    <img className={styles.navbar__logo} src="https://e.top4top.io/p_30403tpuj1.png" alt="logo" />
                    </div>
             
                    <div>
                        <ul className={styles.navbar__list}>
                            <li className={styles.navbar__item}>
                                <Link to="/" className={styles.navbar__link}>Home</Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link to="/movie/create" className={styles.navbar__link}>Add Movie</Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link to="/movie/popular" className={styles.navbar__link}>Popular</Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link to="/movie/now" className={styles.navbar__link}>Now Playing</Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link to="/movie/top" className={styles.navbar__link}>Top Rated</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;