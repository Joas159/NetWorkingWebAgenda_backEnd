const conexao = require("../../src/connections");

const ctrl_listCompromissos = async (req, res) => {
    return res.status(200).json('teste de conexão da listagem de compromissos');
}

module.exports = {
    ctrl_listCompromissos
};