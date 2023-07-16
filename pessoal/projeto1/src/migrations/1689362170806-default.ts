import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1689362170806 implements MigrationInterface {
    name = 'Default1689362170806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`email\` text NOT NULL, \`senha\` text NOT NULL, \`dataCadastro\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tarefas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`descricao\` text NOT NULL, \`dataCriacao\` date NOT NULL, \`dataTermini\` date NOT NULL, \`status\` tinyint NOT NULL, \`usuarioId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tarefas\` ADD CONSTRAINT \`FK_74c239e8fc0ed43f926c17cdd71\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`usuario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tarefas\` DROP FOREIGN KEY \`FK_74c239e8fc0ed43f926c17cdd71\``);
        await queryRunner.query(`DROP TABLE \`tarefas\``);
        await queryRunner.query(`DROP TABLE \`usuario\``);
    }

}
