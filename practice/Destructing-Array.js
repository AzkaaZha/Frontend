/** Membuat Array Family
 * Suami = Azka Zharari
 * Istri = Aisyah Zharari
 * Anak = Alya Zharari
 */

const Family = ["Azka Zharari", "Aisyah Zharari", "Alya Zharari"];

// Destructing Array berdasarkan index atau posisi

const [Husband, Wife, Son] = Family;

//Menampilkan hasil destructing array
console.log(`
    Suami: ${Husband},
    Istri: ${Wife},
    Anak: ${Son}
`);