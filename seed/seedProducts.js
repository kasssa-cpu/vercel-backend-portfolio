require('dotenv').config();
const connectDB = require('../db/connection');
const Product = require('../models/productModel');


const products = [
    {
        name: "Donut",
        price: 8000,
        img: "/images/donut.png"
    },
    {
        name: "Hot Coffee",
        price: 13000,
        img: "/images/hot-coffe.png"
    },
    {
        name: "Brownies",
        price: 42000,
        img: "/images/brownies-chocolate.png"
    },
    {
        name: "Roti bantal",
        price: 22000,
        img: "/images/roti-bantal.png"
    },
    {
        name: "Strawberry milkshake",
        price: 18000,
        img: "/images/strawberry-milkshake.png"
    },
    {
        name: "Rot tawar",
        price: 23000,
        img: "/images/roti-tawar.png"
    },
    {
        name: "Ice chocolate",
        price: 11000,
        img: "/images/ice-chocolate.png"
    },
    {   
        name: "Roti bakar",
        price: 27000,
        img: "/images/roti-bakar.png"
    },
    {
        name: "Hot-dog",
        price: 15000,
        img: "/images/hot-dog.png"
    },
    
];

async function seed() {
    try {
        await connectDB();
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Seed data berhasil');
        process.exit();
    } catch (err) {
        console.error('Seed gagal:', err);
        process.exit(1);
    }
}

seed();
