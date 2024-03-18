/**
 * Membuat Fungsi SUM 
 * Menjumlahkan Bilangan 
 * Menggunakan Rest Parameter  
 */

function sum(...numbers) {
    let result = 0;
    for (const number of numbers){
        result += number;
    }

    return result;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Membuat Fungsi showStudent 
function showStudent(nama, kelas, ...nilai) {
    let Totalnilai = 0;
    for (const number of nilai){
        Totalnilai += number;
    }
    let average = Totalnilai / nilai.length;
    return `
    ## Data Nilai Mahasiswa ##
    Nama: ${nama}, 
    Kelas: ${kelas}, 
    Rata-rata: ${average}`;
}

console.log(showStudent("Azka Zharari", "TI03" , 90, 85, 70, 65, 75, 90))