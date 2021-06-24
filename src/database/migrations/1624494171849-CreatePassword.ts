import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CreatePassword1624494171849 implements MigrationInterface {
    name = "CreatePassword1624494171849";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "password",
                type: "varchar",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password");
    }
}
