import Transaction from "../../../../../../src/services/banks/bank_1/integration/transaction";

describe("Transaction", () => {
  test("amount getter returns correct amount", () => {
    const transaction = new Transaction(
      100,
      Transaction.TYPE_CREDIT,
      "Test transaction"
    );
    expect(transaction.getAmount()).toBe(100);
  });

  test("type getter returns correct type", () => {
    const transaction = new Transaction(
      100,
      Transaction.TYPE_CREDIT,
      "Test transaction"
    );
    expect(transaction.getType()).toBe(Transaction.TYPE_CREDIT);
  });

  test("text getter returns correct text", () => {
    const transaction = new Transaction(
      100,
      Transaction.TYPE_CREDIT,
      "Test transaction"
    );
    expect(transaction.getText()).toBe("Test transaction");
  });
});
