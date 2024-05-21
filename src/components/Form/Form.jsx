/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import styles from './Form.module.css';
import { useState } from 'react';
import Alert from '../Alert/Alert';

function Form(props) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [poster, setPoster] = useState('');
    const [genre, setGenre] = useState('');

    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isPosterError, setIsPosterError] = useState(false);
    const [isGenreError, setIsGenreError] = useState(false);

    const { movies, setMovies } = props;

    function handleTitle(e) {
        setTitle(e.target.value);
    }
    function handleDate(e) {
        setDate(e.target.value);
    }
    function handlePoster(e) {
        setPoster(e.target.value);
    }
    function handleGenre(e) {
        setGenre(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (title === '') {
            setIsTitleError(true);
        }
        else if (date === '') {
            setIsDateError(true);
        }
        else if (poster === '') {
            setIsPosterError(true);
        }
        else if (genre === '') {
            setIsGenreError(true);
        }
        else {
            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: 'Movie',
                genre: genre,
                poster: poster
            };

            setMovies([...movies, movie]);
            setIsTitleError(false);
            setIsDateError(false);
            setIsPosterError(false);
            setIsGenreError(false);

            setTitle('');
            setDate('');
            setPoster('');
            setGenre('');
        }
    }

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
                    <form onSubmit={handleSubmit}>
                        <label className={styles.form__label}>Title</label><br />
                        <input 
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={handleTitle}
                            className={styles.form__input} />
                        {isTitleError && <Alert>Title wajib diisi</Alert>}
                        <br />
                        <label className={styles.form__label}>Genre</label><br />
                        <select
                            id="genre"
                            value={genre}
                            onChange={handleGenre}
                            className={styles.form__input}>
                            <option value="">Select Genre</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                            <option value="Romance">Romance</option>
                            <option value="Komedi">Komedi</option>
                        </select>
                        {isGenreError && <Alert>Genre wajib diisi</Alert>}
                        <br />
                        <label className={styles.form__label}>Release Date</label><br />
                        <input 
                            id="date"
                            type="date"
                            value={date}
                            onChange={handleDate}
                            className={styles.form__input} />
                        {isDateError && <Alert>Release Date wajib diisi</Alert>}
                        <br />
                        <label className={styles.form__label}>Poster</label><br />
                        <input 
                            id="poster"
                            type="url"
                            placeholder="Poster URL"
                            value={poster}
                            onChange={handlePoster}
                            className={styles.form__input} />
                        {isPosterError && <Alert>Poster wajib diisi</Alert>}  
                        <br />
                        <button className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Form;