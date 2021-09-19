import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransactions1632064049735 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "amount",
            type: "float",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "method",
            type: "varchar",
          },
          {
            name: "card_number",
            type: "varchar",
          },
          {
            name: "card_owner_name",
            type: "varchar",
          },
          {
            name: "card_expiration_date",
            type: "date",
          },
          {
            name: "card_verification_code",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transactions");
  }
}
