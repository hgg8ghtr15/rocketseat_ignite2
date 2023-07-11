// src/database/connection.ts
// import mysql from 'mysql';

// class Connection {
//   [x: string]: any;
//   private connection: mysql.Connection;

//   constructor() {
//     this.connection = mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: 'J6t2hybt26@',
//       database: 'apptarefa',
//     });

//     this.connection.connect((err) => {
//       if (err) {
//         console.error('Erro ao conectar ao banco de dados:', err);
//         return;
//       }
//       console.log('Conexão com o banco de dados estabelecida com sucesso!');
//     });
//   }

//   // Métodos para executar consultas SQL, como query() e execute()

//   encerrarConexao(): void {
//     this.connection.end((err) => {
//       if (err) {
//         console.error('Erro ao encerrar a conexão com o banco de dados:', err);
//         return;
//       }
//       console.log('Conexão com o banco de dados encerrada com sucesso!');
//     });
//   }
// }

// export { Connection };

import mysql from 'mysql';

class Connection {
  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'J6t2hybt26@',
      database: 'apptarefa',
    });

    this.connection.connect((err) => {
      if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
      }
      console.log('Conexão com o banco de dados estabelecida com sucesso!');
    });
  }

  query(sql: string, values: any[], callback: (err: any, result: any) => void): void {
    this.connection.query(sql, values, callback);
  }

  encerrarConexao(): void {
    this.connection.end((err) => {
      if (err) {
        console.error('Erro ao encerrar a conexão com o banco de dados:', err);
        return;
      }
      console.log('Conexão com o banco de dados encerrada com sucesso!');
    });
  }
}

export { Connection };