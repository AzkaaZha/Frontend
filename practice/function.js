/**Membuat Function Luas Segitiga dan Keliling Segitiga
 * Membuat Rumus Luas Segitiga
 * Membuat Rumus Keliling Segitiga
 * Menggunakan Function
 */

function LuasSegitiga(alas, tinggi) {
    const luas = (alas * tinggi) / 2;

    return luas;
}

function KelilingSegitiga(sisi1, sisi2, sisi3) {
    const keliling = sisi1 + sisi2 + sisi3;

    return keliling;
}

console.log(`Luas Segitiga: ${LuasSegitiga(10, 5)}`);
console.log(`Keliling Segitiga: ${KelilingSegitiga(10, 5, 7)}`);



