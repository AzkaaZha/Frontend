import styles from './Form.module.css';

function Form() {
    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                    className={styles.form__image} 
                    src="https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg" alt="placeholder" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form action="">
                        <label className={styles.form__label}>Title</label><br />
                        <input type="text" placeholder="Title" className={styles.form__input} /><br />
                        <label className={styles.form__label}>Genre</label><br />
                        <select id="genre" className={styles.form__input}>
                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="horror">Horror</option>
                            <option value="mystery">Mystery</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-Fi</option>
                            <option value="thriller">Thriller</option>
                        </select><br />
                        <label className={styles.form__label}>Release Date</label><br />
                        <input type="date" placeholder="Release Date" className={styles.form__input} />
                        <button className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Form;