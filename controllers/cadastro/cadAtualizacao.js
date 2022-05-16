const conexao = require("../../src/connections");

const ctrl_cadAtualizacao = async (req, res) => {
    const { dataHoraAtualizacao, pessoa, descricao } = req.body;

    if (!dataHoraAtualizacao || !pessoa || !descricao) {
        return res.status(400).json({ Mensagem: "Parâmetro(s) Obrigatório(s) Não Informado(s)." });
    }

    const query = "insert into atualizacao (dataHoraAtualizacao, pessoa, descricao) values ($1, $2, $3)";
    const processoQuery = await conexao.query(query, [ dataHoraAtualizacao, pessoa, descricao ]);

}

module.exports = {
    ctrl_cadAtualizacao
};