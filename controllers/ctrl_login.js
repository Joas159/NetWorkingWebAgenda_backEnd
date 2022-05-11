const conexao = require("../../src/connections");

const ctrl_login = async (req, res) => {
    return res.status(200).json('teste de conexão do Login');
}

module.exports = {
    ctrl_login
};