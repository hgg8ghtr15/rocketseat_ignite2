-- Selecionar o banco de dados
USE apptarefa;

-- Criar tabela tarefa
CREATE TABLE tarefa (
  id VARCHAR(36) PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  duracao VARCHAR(100) NOT NULL,
  status BOOLEAN NOT NULL,
  data_conclusao DATE,
  data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);