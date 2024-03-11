//Kondisi Berangkat Ke Kampus

const condition = "hujan";

if (condition === "hujan") {
  console.log("Berangkat Pakai Jas Hujan");
}
else if (condition === "banjir") {
    console.log("Tidak Berangkat Ke Kampus");
}
else {
  console.log("Tetap Berangkat Ke Kampus");
}

//Kondisi menghitung nilai

const nilai = 80;

if (nilai >= 90) {
    console.log("Nilai A");
} else if (nilai >= 80) {
    console.log("Nilai B");
} else if (nilai >= 70) {
    console.log("Nilai C");
}else {
    console.log("Nilai D");
}