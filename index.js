import express from "express";
import bodyParser from "body-parser";
import mobilRoute from "./routes/mobil.js";
import hewanRoute from "./routes/hewan.js";
import laptopRoute from "./routes/laptop.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/mobil", mobilRoute);
app.use("/hewan", hewanRoute);
app.use("/laptop", (laptopRoute));

app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("Selamat Pagiiii");
});

app.listen(PORT, () => console.log(
    `Server berjalan di port : http://localhost:${PORT}`));