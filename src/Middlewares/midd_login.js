const conexao = require("../connections");
const securePassword = require("secure-password");
const pwd = securePassword();

const midd_login = async (req, res, next) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res
            .status(400)
            .json({ mensagem: "Campo(s) Obrigatório(s) Não Preenchido(s)" });
    }
}

//checagem de existência do usuário
const checkUser = "select * from usuarios where email = $1";
const usuario = await conexao.query(checkUser, [email]);

if (usuario.rowCount == 0) {
    return res.status(400).json({ mensagem: "Dados Incorretos" });
}

const dataUser = usuario.rows[0];


//checagem de correspondência
const checkSenha = await pwd.verify(
    Buffer.from(senha),
    Buffer.from(dataUser.senha, "hex")
);

switch (checkSenha) {
    case securePassword.INVALID_UNRECOGNIZED_HASH:
    case securePassword.INVALID:
        return res.status(400).json("Dados de Acesso Incorretos");
    case securePassword.VALID:
        break;
    case securePassword.VALID_NEEDS_REHASH:
        try {
            const improvedHash = (await pwd.hash(senha)).toString("hex");
            const query = "update usuarios set senha = $1 where email = $2";
            await conexao.query(query, [improvedHash, email]);
        } catch { }
        break;
}

next();

module.exports = {
    midd_login,
};