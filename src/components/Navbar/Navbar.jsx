import styles from './Navbar.module.css';

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
                            <li className={styles.navbar__item}>Home</li>
                            <li className={styles.navbar__item}>Add Movie</li>
                            <li className={styles.navbar__item}>Popular</li>
                            <li className={styles.navbar__item}>Now Playing</li>
                            <li className={styles.navbar__item}>Top Rated</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;