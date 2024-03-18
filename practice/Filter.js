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
    },
    {
        Name: "Ahmad Fadlya",
        Score: 80,
    }
];

/**
 * Menjalankan Method Filter
 * Mencari data berdasarkan kondisi
 * Kondisi Nilai di atas 70
 */

const filterdStudent = Student.filter((student) => 
    student.Score > 70
);

console.log(filterdStudent);