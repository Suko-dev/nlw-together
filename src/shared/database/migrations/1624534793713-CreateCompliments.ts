import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1624534793713 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "message",
                        type: "varchar",
                    },
                    {
                        name: "senderId",
                        type: "uuid",
                    },
                    {
                        name: "recieverId",
                        type: "uuid",
                    },
                    {
                        name: "tagId",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUserComplimentSender",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["senderId"],
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE",
                    },
                    {
                        name: "FKUserComplimentReciever",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["recieverId"],
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE",
                    },
                    {
                        name: "FKUserComplimentSender",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tagId"],
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }
}
