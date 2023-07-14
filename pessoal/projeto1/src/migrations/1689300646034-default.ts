import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1689300646034 implements MigrationInterface {
    name = 'Default1689300646034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tarefas\` ADD \`status\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tarefas\` DROP COLUMN \`status\``);
    }

}
