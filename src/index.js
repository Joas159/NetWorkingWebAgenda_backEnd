const express = require("express");
const app = express();
// const rotas = require("../routes");
const { routes } = require("../routes");
app.use(express.json());
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("O servidor está rodando na porta " + PORT);
});