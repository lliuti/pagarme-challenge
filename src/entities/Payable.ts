import { v4 as uuid } from "uuid";
import {
  Entity,
  PrimaryColumn,
  JoinColumn,
  OneToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Transaction } from "./Transaction";

@Entity("payables")
export class Payable {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  status: string;

  @Column()
  transaction_id: string;

  @JoinColumn({ name: "transaction_id" })
  @OneToOne(() => Transaction)
  transactionId: Transaction;

  @Column()
  payment_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
