require("dotenv").config();

const express = require("express");
const ethereum = require("./ethereum");
const app = express();

// Puerto en el que la API escuchará
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());



// Rutas de ejemplo
app.get("/ethereum/", async (_, res) => {
    try {
        const result = await ethereum();
        res.send(`${result}`);
    } catch (error) {
        res.status(500).send("Error calculating result");
    }
});


// Escucha del servidor
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/ethereum/`);
});
