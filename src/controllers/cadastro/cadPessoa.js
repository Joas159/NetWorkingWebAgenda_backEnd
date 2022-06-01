const conexao = require("../../connections");

const ctrl_cadPessoa = async (req, res) => {
    const { nome, perfil, tematica, dt_contato_inicial, dt_aniversario, telefone,
        email, foto_perfil, dt_ultima_atualizacao, tempo_recorr } = req.body;

    if (!nome || !perfil || !dt_contato_inicial || !dt_aniversario || !telefone || !email || !dt_ultima_atualizacao || !tempo_recorr) {
        return res.status(400).json({ Mensagem: "Parâmetro(s) Obrigatório(s) Não Informado(s)." });
    }

    const query = "insert into pessoas (nome, perfil, tematica, dt_contato_inicial, dt_aniversario, telefone, email, foto_perfil, dt_ultima_atualizacao, tempo_recorr) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
    const processoQuery = await conexao.query(query, [nome, perfil, tematica, dt_contato_inicial, dt_aniversario, telefone, email, foto_perfil, dt_ultima_atualizacao, tempo_recorr]);

}

module.exports = {
    ctrl_cadPessoa
};