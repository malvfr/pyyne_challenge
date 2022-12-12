import Bank1Integration from "../../../../../../src/services/banks/bank_1/integration/bank_1_integration";
import { BankTransactionType } from "../../../../../../src/services/banks/bank_integration";

describe("Bank1Integration", () => {
  test("getBalance returns correct balance", () => {
    const bank1Integration = new Bank1Integration();
    expect(bank1Integration.getBalance(123)).toBe("215.5 USD");
  });

  test("getTransactions returns correct transactions", () => {
    const bank1Integration = new Bank1Integration();
    const transactions = bank1Integration.getTransactions(
      123,
      new Date(2022, 11, 1),
      new Date(2022, 11, 31)
    );
    expect(transactions).toHaveLength(3);
    expect(transactions[0].amount).toBe(100);
    expect(transactions[0].text).toBe("Check deposit");
    expect(transactions[0].type).toBe(BankTransactionType.CREDIT);
    expect(transactions[1].amount).toBe(25.5);
    expect(transactions[1].text).toBe("Debit card purchase");
    expect(transactions[1].type).toBe(BankTransactionType.DEBIT);
    expect(transactions[2].amount).toBe(225);
    expect(transactions[2].text).toBe("Rent payment");
    expect(transactions[2].type).toBe(BankTransactionType.DEBIT);
  });
});
