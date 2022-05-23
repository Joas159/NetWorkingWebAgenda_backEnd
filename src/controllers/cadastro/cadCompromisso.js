const conexao = require("../../connections");

const ctrl_cadCompromisso = async (req, res) => {
    const { local, horaInicio, horaFim, valor, alarme, observacoes } = req.body;

    if (!local || !horaInicio || !horaFim || !valor) {
        return res.status(400).json({ Mensagem: "Parâmetro(s) Obrigatório(s) Não Informado(s)." });
    }

    const query = "insert into compromissos (local, horaInicio, horaFim, valor, alarme, observacoes) values ($1, $2, $3, $4, $5, $6)";
    const processoQuery = await conexao.query(query, [local, horaInicio, horaFim, valor, alarme, observacoes]);

}

module.exports = {
    ctrl_cadCompromisso
};