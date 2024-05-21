/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import styles from './Form.module.css';
import { useState } from 'react';
import Alert from '../Alert/Alert';

function Form(props) {

    const { movies, setMovies } = props;

    const [formData, setFormData] = useState({
        title:"",
        date:"",
        poster:"",
        genre:""
    });
    
    const [errors, setErrors] = useState({
        title : false,
        date : false,
        poster : false,
        genre : false
    })

    const { title, date, poster, genre } = formData;
            
    function validate() {
        const newErrors = {
            title: title === '',
            date: date === '',
            poster: poster === '',
            genre: genre === ''
        };

        setErrors(newErrors);

        return !Object.values(newErrors).some(error => error);
    }

    function addMovie () {
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            genre: genre,
            poster: poster
        };

        setMovies([...movies, movie]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        validate() && addMovie()

        setFormData({
            title:"",
            date:"",
            poster:"",
            genre:""
        });
    }

    function handleChange(e) {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
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
                            name="title"
                            onChange={handleChange}
                            className={styles.form__input} />
                        {errors.title && <Alert>Title wajib diisi</Alert>}
                        <br />
                        <label className={styles.form__label}>Genre</label><br />
                        <select
                            id="genre"
                            value={genre}
                            name="genre"
                            onChange={handleChange}
                            className={styles.form__input}>
                            <option value="">Select Genre</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                            <option value="Romance">Romance</option>
                            <option value="Komedi">Komedi</option>
                        </select>
                        {errors.genre && <Alert>Genre wajib diisi</Alert>}
                        <br />
                        <label className={styles.form__label}>Release Date</label><br />
                        <input 
                            id="date"
                            type="date"
                            name="date"
                            value={date}
                            onChange={handleChange}
                            className={styles.form__input} />
                        {errors.date && <Alert>Release Date wajib diisi</Alert>}
                        <br />
                        <label className={styles.form__label}>Poster</label><br />
                        <input 
                            id="poster"
                            type="url"
                            name="poster"
                            placeholder="Poster URL"
                            value={poster}
                            onChange={handleChange}
                            className={styles.form__input} />
                        {errors.poster && <Alert>Poster wajib diisi</Alert>}  
                        <br />
                        <button className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Form;