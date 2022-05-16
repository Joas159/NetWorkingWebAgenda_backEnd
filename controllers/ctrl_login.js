//const conexao = require("../../src/connections");
const jwt = require("jsonwebtoken");
const secretKey = require("../src/passPhraseJwt");

const ctrl_login = async (req, res) => {

    const { email, senha } = req.body;

    //-- Geração de Token --
    const token = jwt.sign(
        {
            email: email,
            senha: senha,
        },
        secretKey,
        {
            expiresIn: "10m",
        }
    );

    return res.send(token);
}

module.exports = {
    ctrl_login
};