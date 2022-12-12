import Transaction, {
  TransactionType,
} from "../../../../../../src/services/banks/bank_2/integration/transaction";

describe("Transaction", () => {
  test("getAmount should return the correct amount", () => {
    const amount = 100;
    const type = TransactionType.DEBIT;
    const text = "PYYNE transaction #";
    const transaction = new Transaction(amount, type, text);
    expect(transaction.getAmount()).toBe(amount);
  });

  test("getType should return the correct type", () => {
    const amount = 100;
    const type = TransactionType.DEBIT;
    const text = "PYYNE transaction #";
    const transaction = new Transaction(amount, type, text);
    expect(transaction.getType()).toBe(type);
  });

  test("getText should return the correct text", () => {
    const amount = 100;
    const type = TransactionType.DEBIT;
    const text = "PYYNE transaction #";
    const transaction = new Transaction(amount, type, text);
    expect(transaction.getText()).toBe(text);
  });
});
