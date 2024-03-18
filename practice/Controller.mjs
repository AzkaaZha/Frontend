// Import data user dari file Data.mjs
import Student from './Data.mjs';

/** 
 * Membuat User Controller
 * Terdapat method index dan store
 */

const index = () => {
    console.log("Index - Get All Student");
    Student.forEach((student) => 
        console.log(student)
    );
}

const store = (student) => {
    Student.push(student);
};

export { index, store };