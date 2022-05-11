const conexao = require("../../src/connections");

const ctrl_mudarSenha = async (req, res) => {
    return res.status(200).json('teste de conexão da mudança de senha');
}

module.exports = {
    ctrl_mudarSenha
};