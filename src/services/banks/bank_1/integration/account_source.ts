import Transaction from "./transaction";

export default class AccountSource {
  public getAccountBalance(accountId: number): number {
    return 215.5;
  }

  public getAccountCurrency(accountId: number): string {
    return "USD";
  }

  public getTransactions(
    accountId: number,
    fromDate: Date,
    toDate: Date
  ): Transaction[] {
    return [
      new Transaction(100, Transaction.TYPE_CREDIT, "Check deposit"),
      new Transaction(25.5, Transaction.TYPE_DEBIT, "Debit card purchase"),
      new Transaction(225, Transaction.TYPE_DEBIT, "Rent payment"),
    ];
  }
}
