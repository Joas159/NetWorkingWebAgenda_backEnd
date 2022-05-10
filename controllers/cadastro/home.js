//const conexao = require('../conexao');

const ctrl_home = async (req, res) => {
    return res.status(200).json('teste de conexão do home');
}

module.exports = {
    ctrl_home
};