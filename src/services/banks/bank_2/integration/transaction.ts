export enum TransactionType {
  DEBIT,
  CREDIT,
}

export default class Transaction {
  private amount: number;
  private type: TransactionType;
  private text: string;

  constructor(amount: number, type: TransactionType, text: string) {
    this.amount = amount;
    this.type = type;
    this.text = text;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getType(): TransactionType {
    return this.type;
  }

  public getText(): string {
    return this.text;
  }
}
