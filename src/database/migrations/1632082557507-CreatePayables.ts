import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePayables1632082557507 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "payables",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "transaction_id",
            type: "uuid",
          },
          {
            name: "payment_date",
            type: "date",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKTransactionPayable",
            referencedTableName: "transactions",
            referencedColumnNames: ["id"],
            columnNames: ["transaction_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("payables");
  }
}
