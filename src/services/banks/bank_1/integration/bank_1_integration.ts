import BankIntegration, { BankTransactionType } from "../../bank_integration";
import Transaction from "./transaction";
import AccountSource from "./account_source";

export default class Bank1Integration implements BankIntegration {
  private accountSource: AccountSource;

  constructor() {
    this.accountSource = new AccountSource();
  }

  getBalance(accountId: number) {
    return `${this.accountSource.getAccountBalance(
      accountId
    )} ${this.accountSource.getAccountCurrency(accountId)}`;
  }

  getTransactions(accountId: number, fromDate: Date, toDate: Date) {
    const transactions = this.accountSource.getTransactions(
      accountId,
      fromDate,
      toDate
    );

    return transactions.map((transaction) => ({
      amount: transaction.getAmount(),
      text: transaction.getText(),
      type: this.transformTransactionTypeValue(transaction.getType()),
    }));
  }

  private transformTransactionTypeValue(type: number) {
    if (type == Transaction.TYPE_CREDIT) return BankTransactionType.CREDIT;

    return BankTransactionType.DEBIT;
  }
}
