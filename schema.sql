create database BD_NtWebAg;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(190) NOT NULL,
  sobrenome VARCHAR(190) NOT NULL,
  celular INTEGER,
  email VARCHAR(80) UNIQUE,
  senha VARCHAR(20) NOT NULL
);


INSERT INTO usuarios
(nome, sobrenome, celular, email, senha)
VALUES
('Joas','Sousa e Silva', '+5568992750173', 'joas@gmail.com', '123456');

CREATE TABLE pessoas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(190) NOT NULL,
  perfil VARCHAR(30) NOT NULL,
  tematica VARCHAR(30),
  dataContatoInicial DATE NOT NULL, 
  aniversario DATE NOT NULL, 
  telefone VARCHAR(20) NOT NULL,
  email VARCHAR(80) UNIQUE,
  dataUltimaAtualizacao DATE NOT NULL, 
  tempoRecorr TIME NOT NULL
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

