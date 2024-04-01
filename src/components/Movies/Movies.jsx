import styles from './Movies.module.css';

function Movies() {
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    <div className={styles.movie}>
                        <img 
                        className={styles.movie__image}
                        src="https://media.21cineplex.com/webcontent/gallery/pictures/170980638065259_287x421.jpg" alt="" />
                        <h3 className={styles.movie__title}>Godzilla x Kong</h3>
                        <p className={styles.movie__date}>27 Maret 2024</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                        className={styles.movie__image}
                        src="https://asset.tix.id/wp-content/uploads/2024/02/3cbcfdfeef3d4fd0a1b492a69bd9c1ff.jpg" alt="" />
                        <h3 className={styles.movie__title}>ExhumaMovie Tittle</h3>
                        <p className={styles.movie__date}>28 Februari 2024</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                        className={styles.movie__image}
                        src="https://media.21cineplex.com/webcontent/gallery/pictures/170782669516781_405x594.jpg" alt="" />
                        <h3 className={styles.movie__title}>Ronggeng Kematian</h3>
                        <p className={styles.movie__date}>28 Maret 2024</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                        className={styles.movie__image}
                        src="https://media.21cineplex.com/webcontent/gallery/pictures/170833695317395_287x421.jpg" alt="" />
                        <h3 className={styles.movie__title}>Kungfu Panda 4</h3>
                        <p className={styles.movie__date}>03 Maret 2024</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                        className={styles.movie__image}
                        src="https://media.21cineplex.com/webcontent/gallery/pictures/170980638065259_287x421.jpg" alt="" />
                        <h3 className={styles.movie__title}>Godzilla x Kong</h3>
                        <p className={styles.movie__date}>27 Maret 2024</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                        className={styles.movie__image}
                        src="https://asset.tix.id/wp-content/uploads/2024/02/3cbcfdfeef3d4fd0a1b492a69bd9c1ff.jpg" alt="" />
                        <h3 className={styles.movie__title}>ExhumaMovie Tittle</h3>
                        <p className={styles.movie__date}>28 Februari 2024</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                        className={styles.movie__image}
                        src="https://media.21cineplex.com/webcontent/gallery/pictures/170782669516781_405x594.jpg" alt="" />
                        <h3 className={styles.movie__title}>Ronggeng Kematian</h3>
                        <p className={styles.movie__date}>28 Maret 2024</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                        className={styles.movie__image}
                        src="https://media.21cineplex.com/webcontent/gallery/pictures/170833695317395_287x421.jpg" alt="" />
                        <h3 className={styles.movie__title}>Kungfu Panda 4</h3>
                        <p className={styles.movie__date}>03 Maret 2024</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Movies;