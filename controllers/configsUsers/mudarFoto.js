const conexao = require("../../src/connections");

const ctrl_mudarFoto = async (req, res) => {
    return res.status(200).json('teste de conexão da alteração de foto do perfil');
}

module.exports = {
    ctrl_mudarFoto
};