import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

@Entity("transactions")
class Transaction {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  amount: number;

  @Column()
  description: string;

  @Column()
  method: string;

  @Column()
  card_number: string;

  @Column()
  card_owner_name: string;

  @Column()
  card_expiration_date: Date;

  @Column()
  card_verification_code: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Transaction };
