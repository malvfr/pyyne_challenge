import BankService from "../../../../src/services/banks/bank_service";
import { BankTransactionType } from "../../../../src/services/banks/bank_integration";

describe("BankService", () => {
  let bankService: BankService;

  beforeEach(() => {
    bankService = new BankService();
  });

  test("getBalancesFromAllBanks returns correct balance from all banks available", () => {
    const result = bankService.getBalancesFromAllBanks(123);

    expect(result).toEqual([
      { amount: 215.5, currency: "USD" },
      { amount: 512.5, currency: "USD" },
    ]);
  });

  test("getTransactionsFromAllBanks returns all transactions from all banks available", () => {
    const result = bankService.getTransactionsFromAllBanks(
      123,
      new Date(),
      new Date()
    );

    expect(result).toEqual([
      [
        {
          amount: 100,
          text: "Check deposit",
          type: BankTransactionType.CREDIT,
        },
        {
          amount: 25.5,
          text: "Debit card purchase",
          type: BankTransactionType.DEBIT,
        },
        {
          amount: 225,
          text: "Rent payment",
          type: BankTransactionType.DEBIT,
        },
      ],
      [
        {
          amount: 125,
          text: "Amazon.com",
          type: BankTransactionType.DEBIT,
        },
        {
          amount: 500,
          text: "Car insurance",
          type: BankTransactionType.DEBIT,
        },
        {
          amount: 800,
          text: "Salary",
          type: BankTransactionType.CREDIT,
        },
      ],
    ]);
  });
});
