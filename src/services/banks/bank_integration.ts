export enum BankTransactionType {
  DEBIT,
  CREDIT,
}

export type BankTransaction = {
  amount: number;
  type: BankTransactionType;
  text: string;
};

export default interface BankIntegration {
  getBalance(accountId: number): string;
  getTransactions(
    accountNum: number,
    fromDate: Date,
    toDate: Date
  ): BankTransaction[];
}
