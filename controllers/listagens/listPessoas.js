const conexao = require("../../src/connections");
const jwt = require("jsonwebtoken");
const secretKey = require("../../src/passPhraseJwt");

const ctrl_listPessoas = async (req, res) => {
    const { email, token } = req.body;

    if (!email || !token) {
        return res.status(400).json({"Mensagem": "parâmetro obrigatório não informado"});
    }

    try {
        const usuario = jwt.verify(token, secretKey);   
        console.log(`${usuario.email} está realizando tentativa de acesso`);
    } catch (error) {
        res.status(403).json({"Mensagem": "Sessão Encerrada. Realizar Login Novamente"});
    }
   
    //Resultado Geral
    const listaGeral = await conexao.query('select * from pessoas');
    return res.json(listaGeral.rows);
}

module.exports = {
    ctrl_listPessoas
};