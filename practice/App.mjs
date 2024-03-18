/**
 * Import User Controller dari file Controller.mjs
 * Melakukan Destructing untuk ekstrak object 
 */
import { index, store } from './Controller.mjs';

const main = () => {
    const student = {
        Name: "Achraf Hakimi",
        Score: 85
    };

    index();
    store(student);
    index();
}

main();