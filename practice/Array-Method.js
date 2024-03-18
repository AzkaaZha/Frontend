// Membuat array names 

const names = ["Baswad", "Subyan", "Prano"];

//Menjalankan Foreach 
names.forEach((name) => 
    console.log(`Nama: ${name}`)
);

//Menjalankan Menggunakan Map
const nameList = names.map((name) =>
    `Bpk/ibu ${name}`
);

console.log(nameList);