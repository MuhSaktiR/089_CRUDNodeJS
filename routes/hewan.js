import express from "express";

const router = express.Router();

const hewan = [
    {
        nama: "Monyet",
        spesies: "Macaca fascicularis",
        habitat: "Hutan Tropis",
        berat: "5-10 kg"
    },
    {
        nama: "Harimau",
        spesies: "Panthera tigris",
        habitat: "Hutan Rimba",
        berat: "90-300 kg"
    },
    {
        nama: "Singa",
        spesies: "Panthera leo",
        habitat: "Savana",
        berat: "150-250 kg"
    },
    {
        nama: "Macan",
        spesies: "Panthera pardus",
        habitat: "Hutan dan Pegunungan",
        berat: "30-90 kg"
    }
];

router.get("/", (req, res) => {
    res.send(hewan);
});

export default router