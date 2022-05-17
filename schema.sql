create database BD_NtWebAg;

{
	"nome":"Erika",
	"sobrenome":"Samila Dutra",
	"celular":556191213215,
	"email":"erika@gmail.com",
	"senha":"123456789"
}

{
	"nome":"Joas",
	"sobrenome":"Sousa e Silva",
	"celular":5561912124547,
	"email":"joas@gmail.com",
	"senha":"83579128"
}


drop table pessoas;
drop table usuarios;

INSERT INTO usuarios
(nome, sobrenome, celular, email, senha)
VALUES
('Joas','Sousa e Silva', '+5568992750173', 'joas@gmail.com', '123456');

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(190) NOT NULL,
  sobrenome VARCHAR(190) NOT NULL,
  celular INTEGER,
  email VARCHAR(80) UNIQUE,
  senha VARCHAR(500) NOT NULL
);

CREATE TABLE pessoas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(190) NOT NULL,
  perfil VARCHAR(30) NOT NULL,
  tematica VARCHAR(30),
  dt_contato_inicial DATE NOT NULL, 
  dt_aniversario DATE NOT NULL, 
  telefone VARCHAR(20) NOT NULL,
  email VARCHAR(80) UNIQUE,
  foto_perfil VARCHAR (20),
  dt_ultima_atualizacao DATE NOT NULL, 
  tempo_recorr integer NOT NULL
);


CREATE TABLE compromissos (
  id SERIAL PRIMARY KEY,
  local VARCHAR(190) NOT NULL,
  horaInicio time NOT NULL, 
  horaFim time NOT NULL, 
  valor double precision NOT NULL, 
  alarme time NOT NULL, 
  observacoes VARCHAR (500)
);

CREATE TABLE atualizacao (
  id SERIAL PRIMARY KEY,
  dataHoraAtualizacao date NOT NULL,
  pessoa VARCHAR (80) NOT NULL,
  descricao VARCHAR(500) NOT NULL 
);

