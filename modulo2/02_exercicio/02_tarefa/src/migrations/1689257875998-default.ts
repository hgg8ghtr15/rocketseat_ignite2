import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1689257875998 implements MigrationInterface {
    name = 'Default1689257875998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`videos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`titulo\` text NOT NULL, \`url\` text NOT NULL, \`video.Id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`diciplinas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`alunos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`descricao\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`aluno_diciplina\` (\`aluno.id\` int NOT NULL, \`diciplina.id\` int NOT NULL, INDEX \`IDX_ddd96acf2878981d459d445c0d\` (\`aluno.id\`), INDEX \`IDX_0eca7fbcbcb0b4a608a39cf261\` (\`diciplina.id\`), PRIMARY KEY (\`aluno.id\`, \`diciplina.id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD CONSTRAINT \`FK_30875f880286a9db543164e64c8\` FOREIGN KEY (\`video.Id\`) REFERENCES \`alunos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`aluno_diciplina\` ADD CONSTRAINT \`FK_ddd96acf2878981d459d445c0d5\` FOREIGN KEY (\`aluno.id\`) REFERENCES \`diciplinas\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`aluno_diciplina\` ADD CONSTRAINT \`FK_0eca7fbcbcb0b4a608a39cf2616\` FOREIGN KEY (\`diciplina.id\`) REFERENCES \`alunos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`aluno_diciplina\` DROP FOREIGN KEY \`FK_0eca7fbcbcb0b4a608a39cf2616\``);
        await queryRunner.query(`ALTER TABLE \`aluno_diciplina\` DROP FOREIGN KEY \`FK_ddd96acf2878981d459d445c0d5\``);
        await queryRunner.query(`ALTER TABLE \`videos\` DROP FOREIGN KEY \`FK_30875f880286a9db543164e64c8\``);
        await queryRunner.query(`DROP INDEX \`IDX_0eca7fbcbcb0b4a608a39cf261\` ON \`aluno_diciplina\``);
        await queryRunner.query(`DROP INDEX \`IDX_ddd96acf2878981d459d445c0d\` ON \`aluno_diciplina\``);
        await queryRunner.query(`DROP TABLE \`aluno_diciplina\``);
        await queryRunner.query(`DROP TABLE \`alunos\``);
        await queryRunner.query(`DROP TABLE \`diciplinas\``);
        await queryRunner.query(`DROP TABLE \`videos\``);
    }

}
