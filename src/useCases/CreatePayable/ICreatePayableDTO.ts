enum StatusEnum {
  paid = "paid",
  waiting = "waiting_funds",
}

interface ICreatePayableDTO {
  status: StatusEnum;
  transaction_id: string;
  payment_date: Date;
}

export { ICreatePayableDTO, StatusEnum };
