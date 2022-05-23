const conexao = require("../../connections");

const ctrl_cadAtualizacao = async (req, res) => {
    const { data_atualizacao, pessoa_perfil, descricao, print_atualizacao } = req.body;

    if (!data_atualizacao || !pessoa_perfil || !descricao) {
        return res.status(400).json({ Mensagem: "Parâmetro(s) Obrigatório(s) Não Informado(s)." });
    }

    const query = "insert into atualizacao (data_atualizacao, pessoa_perfil, descricao, print_atualizacao) values ($1, $2, $3, $4)";
    const processoQuery = await conexao.query(query, [data_atualizacao, pessoa_perfil, descricao, print_atualizacao]);

}

module.exports = {
    ctrl_cadAtualizacao
};