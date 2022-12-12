export enum BankTransactionType {
  DEBIT,
  CREDIT,
}

export type BankTransaction = {
  amount: number;
  type: BankTransactionType;
  text: string;
};

export type BankBalance = {
  amount: number;
  currency: string;
};
export default interface BankIntegration {
  getBalance(accountId: number): BankBalance;
  getTransactions(
    accountNum: number,
    fromDate: Date,
    toDate: Date
  ): BankTransaction[];
}
