import Transaction from "../../../../../../src/services/banks/bank_1/integration/transaction";
import AccountSource from "../../../../../../src/services/banks/bank_1/integration/account_source";

describe("AccountSource", () => {
  test("getAccountBalance returns correct balance", () => {
    const accountSource = new AccountSource();
    expect(accountSource.getAccountBalance(100)).toBe(215.5);
  });

  test("getAccountCurrency returns correct currency", () => {
    const accountSource = new AccountSource();
    expect(accountSource.getAccountCurrency(200)).toBe("USD");
  });

  test("getTransactions returns correct transactions", () => {
    const accountSource = new AccountSource();
    const transactions = accountSource.getTransactions(
      215.5,
      new Date(2022, 11, 1),
      new Date(2022, 11, 31)
    );
    expect(transactions).toHaveLength(3);
    expect(transactions[0].getAmount()).toBe(100);
    expect(transactions[0].getType()).toBe(Transaction.TYPE_CREDIT);
    expect(transactions[0].getText()).toBe("Check deposit");
    expect(transactions[1].getAmount()).toBe(25.5);
    expect(transactions[1].getType()).toBe(Transaction.TYPE_DEBIT);
    expect(transactions[1].getText()).toBe("Debit card purchase");
    expect(transactions[2].getAmount()).toBe(225);
    expect(transactions[2].getType()).toBe(Transaction.TYPE_DEBIT);
    expect(transactions[2].getText()).toBe("Rent payment");
  });
});
