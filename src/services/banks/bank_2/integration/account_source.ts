import AccountBalance from "./account_balance";
import Transaction, { TransactionType } from "./transaction";

export default class AccountSource {
  public getBalance(accountNum: number): AccountBalance {
    return new AccountBalance(512.5, "USD");
  }

  public getTransactions(
    accountNum: number,
    fromDate: Date,
    toDate: Date
  ): Transaction[] {
    return [
      new Transaction(125, TransactionType.DEBIT, "Amazon.com"),
      new Transaction(500, TransactionType.DEBIT, "Car insurance"),
      new Transaction(800, TransactionType.CREDIT, "Salary"),
    ];
  }
}
