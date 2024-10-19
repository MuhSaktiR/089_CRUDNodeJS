import express from "express";

const router = express.Router();

const laptop = [
    {
        merek: "Lenovo",
        model: "LOQ",
        prosesor: "Intel Core i7-13620H",
        GPU: "NVIDIA GeForce RTX 4050",
        RAM: "16GB DDR5"
    },
    {
        merek: "Acer",
        model: "Predator Helios 300",
        prosesor: "Intel Core i7-12700H",
        GPU: "NVIDIA GeForce RTX 3060",
        RAM: "16GB DDR5"
    },
    {
        merek: "Asus",
        model: "ROG Strix G15",
        prosesor: "AMD Ryzen 9 6900HX",
        GPU: "NVIDIA GeForce RTX 3070",
        RAM: "32GB DDR5"
    }
];

router.get("/", (req, res) => {
    res.send(laptop);
});

export default router