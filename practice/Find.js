//Membuat Array of Object

const Student = [
    {
        Name: "Azka Zharari",
        Score: 90,
    },
    {
        Name: "Achmat Hidayatullah",
        Score: 85,
    },
    {
        Name: "Wildan Al Fateh",
        Score: 60,
    },
    {
        Name: "Rahmanur Hakim",
        Score: 65,
    },
    {
        Name: "Firmansyah Putra",
        Score: 75,
    }
];

/**
 * Menjalankan Method Find 
 * Mencari 1 data berdasarkan kondisi
 * Kondisi Nilai  75
 */

const foundStudent = Student.find((student) => 
    student.Score == 75
); 

console.log(foundStudent);