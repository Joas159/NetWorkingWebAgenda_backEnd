const express = require('express');
const routes = express();
const {ctrl_home} = require('./controllers/cadastro/home');
const {ctrl_cadUsuario} = require('./controllers/cadastro/cadUsuario');
const {ctrl_cadPessoa} = require('./controllers/cadastro/cadPessoa');
const {ctrl_cadCompromisso} = require('./controllers/cadastro/cadCompromisso');
const {ctrl_cadAtualizacao} = require('./controllers/cadastro/cadAtualizacao');
const {ctrl_listPessoas} = require('./controllers/listagens/listPessoas');
const {ctrl_listCompromissos} = require('./controllers/listagens/listCompromissos');
const {ctrl_mudarSenha} = require('./controllers/configsUsers/mudarSenha');
const {ctrl_mudarFoto} = require('./controllers/configsUsers/mudarFoto');
const {ctrl_fimLogin} = require('./controllers/configsUsers/fimLogin');

// rota raiz
routes.get('/home', ctrl_home);

//cadastrar usuário
routes.post('/cadUsuario', ctrl_cadUsuario );

//cadastrar pessoa
routes.post('/cadPessoa', ctrl_cadPessoa );

//cadastrar compromisso
routes.post('/cadCompromisso', ctrl_cadCompromisso );

//cadastrar atualização de networking
routes.post('/cadAtualizacao', ctrl_cadAtualizacao );

//listar pessoas
routes.get('/listPessoas', ctrl_listPessoas);

//listar compromissos
routes.get('/listPessoas', ctrl_listCompromissos);

//alterar senha de acesso 
routes.put('/mudarSenha', ctrl_mudarSenha);

//alterar foto de perfil
routes.put('/mudarFoto', ctrl_mudarFoto);

//encerrar login
routes.put('/fimLogin', ctrl_fimLogin);

module.exports = {
    routes
}