import BankService from "../../../src/services/banks/bank_service";
import { BankTransactionType } from "../../../src/services/banks/bank_integration";

describe("BankService", () => {
  let bankService: BankService;

  beforeEach(() => {
    bankService = new BankService();
  });

  test("getBalancesFromAllBanks should return an array of balances from all available bank integrations", () => {
    const accountId = 12345;
    const balances = bankService.getBalancesFromAllBanks(accountId);

    const result = [
      { amount: 215.5, currency: "USD" },
      { amount: 512.5, currency: "USD" },
    ];

    expect(balances).toEqual(result);
  });

  test("getTransactionsFromAllBanks should return an array of transactions from all available bank integrations", () => {
    const accountId = 12345;
    const fromDate = new Date("2022-01-01");
    const toDate = new Date("2022-12-31");
    const transactions = bankService.getTransactionsFromAllBanks(
      accountId,
      fromDate,
      toDate
    );

    const result = [
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
        { amount: 225, text: "Rent payment", type: BankTransactionType.DEBIT },
      ],
      [
        { amount: 125, text: "Amazon.com", type: BankTransactionType.DEBIT },
        { amount: 500, text: "Car insurance", type: BankTransactionType.DEBIT },
        { amount: 800, text: "Salary", type: BankTransactionType.CREDIT },
      ],
    ];

    expect(transactions).toEqual(result);
  });
});
