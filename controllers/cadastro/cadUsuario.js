const conexao = require("../../src/connections");

const ctrl_cadUsuario = async (req, res) => {
    const { nome, sobrenome, celular, email, senha } = req.body;

    if (!nome || !sobrenome || !celular || !email || !senha) {
        return res.status(400).json({ Mensagem: "Parâmetro(s) Obrigatório(s) Não Informado(s)." });
    }

    const query = "insert into usuarios (nome, sobrenome, celular, email, senha) values ($1, $2, $3, $4, $5)";
    const processoQuery = await conexao.query(query, [ nome, sobrenome, celular, email, senha ]);
}

module.exports = {
    ctrl_cadUsuario
};