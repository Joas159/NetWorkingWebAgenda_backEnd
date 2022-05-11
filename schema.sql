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
('Joas','Sousa e Silva', '5563981010950', 'joassousaesilva@gmail.com', '83579128');

