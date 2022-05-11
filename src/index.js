const express = require("express");
const app = express();
const rotas = require("../routes");
app.use(rotas);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("O servidor está rodando na porta " + PORT);
});