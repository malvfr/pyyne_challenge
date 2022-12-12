import AccountSource from "../../../../../../src/services/banks/bank_2/integration/account_source";
import AccountBalance from "../../../../../../src/services/banks/bank_2/integration/account_balance";

import Transaction, {
  TransactionType,
} from "../../../../../../src/services/banks/bank_2/integration/transaction";

describe("AccountSource", () => {
  let accountSource;

  beforeEach(() => {
    accountSource = new AccountSource();
  });

  test("getBalance should return the correct AccountBalance object", () => {
    const accountNum = 1;
    const expectedBalance = new AccountBalance(512.5, "USD");
    const balance = accountSource.getBalance(accountNum);
    expect(balance).toEqual(expectedBalance);
  });

  test("getTransactions should return the correct list of transactions", () => {
    const accountNum = 1;
    const fromDate = new Date("2022-10-01");
    const toDate = new Date("2022-10-31");
    const expectedTransactions = [
      new Transaction(125, TransactionType.DEBIT, "Amazon.com"),
      new Transaction(500, TransactionType.DEBIT, "Car insurance"),
      new Transaction(800, TransactionType.CREDIT, "Salary"),
    ];
    const transactions = accountSource.getTransactions(
      accountNum,
      fromDate,
      toDate
    );
    expect(transactions).toEqual(expectedTransactions);
  });
});
