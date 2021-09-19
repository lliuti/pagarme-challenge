enum MethodEnum {
  debit = "debit_card",
  credit = "credit_card",
}

interface ICreateTransactionDTO {
  amount: number;
  description: string;
  method: MethodEnum;
  card_number: string;
  card_owner_name: string;
  card_expiration_date: Date;
  card_verification_code: string;
}

export { ICreateTransactionDTO, MethodEnum };
