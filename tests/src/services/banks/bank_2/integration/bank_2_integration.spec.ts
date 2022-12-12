import Bank2Integration from "../../../../../../src/services/banks/bank_2/integration/bank_2_integration";
import { BankTransactionType } from "../../../../../../src/services/banks/bank_integration";

describe("Bank2Integration", () => {
  test("getBalance returns correct balance", () => {
    const bank2Integration = new Bank2Integration();
    expect(bank2Integration.getBalance(123)).toEqual({
      amount: 512.5,
      currency: "USD",
    });
  });

  test("getTransactions returns correct transactions", () => {
    const bank2Integration = new Bank2Integration();
    const transactions = bank2Integration.getTransactions(
      123,
      new Date(2022, 11, 1),
      new Date(2022, 11, 31)
    );
    expect(transactions).toHaveLength(3);
    expect(transactions[0].amount).toBe(125);
    expect(transactions[0].text).toBe("Amazon.com");
    expect(transactions[0].type).toBe(BankTransactionType.DEBIT);
    expect(transactions[1].amount).toBe(500);
    expect(transactions[1].text).toBe("Car insurance");
    expect(transactions[1].type).toBe(BankTransactionType.DEBIT);
    expect(transactions[2].amount).toBe(800);
    expect(transactions[2].text).toBe("Salary");
    expect(transactions[2].type).toBe(BankTransactionType.CREDIT);
  });
});
