import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1690292634739 implements MigrationInterface {
    name = 'Default1690292634739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tarefas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`descricao\` text NOT NULL, \`dataCriacao\` date NOT NULL, \`dataTermino\` date NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tarefas\``);
    }

}
