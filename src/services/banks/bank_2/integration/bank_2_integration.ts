import BankIntegration, { BankTransactionType } from "../../bank_integration";
import { TransactionType } from "./transaction";
import AccountSource from "./account_source";

export default class Bank2Integration implements BankIntegration {
  private accountSource: AccountSource;

  constructor() {
    this.accountSource = new AccountSource();
  }

  getBalance(accountId: number) {
    const balance = this.accountSource.getBalance(accountId);

    return {
      amount: balance.getBalance(),
      currency: balance.getCurrency(),
    };
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

  private transformTransactionTypeValue(type: TransactionType) {
    if (type == TransactionType.CREDIT) return BankTransactionType.CREDIT;

    return BankTransactionType.DEBIT;
  }
}
