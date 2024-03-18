/** 
 * Copy Families To New Families
*/

const family = ["Azka Zharari", "Fadhilah Neza" ]
 
const newFamily = [...family, "Alya Zharari", "Aisyah Zharari"];

console.log(newFamily);

// Membuat Kategori Hewan 

const Animals = {
    name: "Paus",
    feed: "Plankton",
};

const newAnimals = {
    ...Animals,
    category: "Mamalia"
};

console.log(newAnimals);