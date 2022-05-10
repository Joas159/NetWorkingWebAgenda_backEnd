const express = require("express");
const app = express();

//const app = require('./servidor');

const PORT = 3000;

app.listen(PORT, () => {
    console.log("O servidor está rodando na porta " + PORT);
});