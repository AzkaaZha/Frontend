// Membuat Object 
const profil = {
    body: {
        name: "Azka Zharari",
        age: 20,
        address: "Jl. Pasir Putih , Sawangan",
    }
};

// Destructing Object berdasarkan key
const { name, age, address } = profil.body;

console.log(`
    Name: ${name},
    Age: ${age},
    Address: ${address}`
);