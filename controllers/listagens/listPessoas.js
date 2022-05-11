const conexao = require("../../src/connections");

const ctrl_listPessoas = async (req, res) => {
    return res.status(200).json('teste de conexão da listagem de pessoas');
}

module.exports = {
    ctrl_listPessoas
};