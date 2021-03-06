const conexao = require("../../connections");
const securePassword = require("secure-password");
const pwd = securePassword();

const ctrl_cadUsuario = async (req, res) => {
    const { nome, sobrenome, celular, email, senha } = req.body;

    if (!nome || !sobrenome || !celular || !email || !senha) {
        return res.status(400).json({ Mensagem: "Parâmetro(s) Obrigatório(s) Não Informado(s)." });
    }

    const userPassword = Buffer.from(senha);
    const hashSenha = (await pwd.hash(userPassword)).toString("hex");

    const query = "insert into usuarios (nome, sobrenome, celular, email, senha) values ($1, $2, $3, $4, $5)";
    const processoQuery = await conexao.query(query, [nome, sobrenome, celular, email, hashSenha]);

    try {
        if (processoQuery.rowCount === 0) {
            return res.status(400).json("Usuário não foi cadastrado!");
        }

        return res.status(200).json("Usuário cadastrado com sucesso!");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    ctrl_cadUsuario
};