import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1689300395635 implements MigrationInterface {
    name = 'Default1689300395635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tarefas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`descricao\` text NOT NULL, \`dataCriacao\` date NOT NULL, \`dataTermini\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tarefas\``);
    }

}
