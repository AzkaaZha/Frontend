import styles from './Hero.module.css';

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h1 className={styles.hero__title}>Dune: Part Two</h1>
                    <h3 className={styles.hero__genre}>Genre : Adventure, Action, Drama</h3>
                    <p className={styles.hero__description}>
                        Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                    className={styles.hero__image} 
                    src="https://www.tajukflores.com/assets/img/rmqiV9OperdByzpmCbhQ5DrImXu-800x450.jpg" alt="placeholder" />
                </div>
            </section>
        </div>
    );
}

export default Hero;