import AccountBalance from "../../../../../../src/services/banks/bank_2/integration/account_balance";

describe("AccountBalance", () => {
  test("getBalance should return the correct balance", () => {
    const balance = 100;
    const currency = "USD";
    const accountBalance = new AccountBalance(balance, currency);
    expect(accountBalance.getBalance()).toBe(balance);
  });

  test("getCurrency should return the correct currency", () => {
    const balance = 100;
    const currency = "USD";
    const accountBalance = new AccountBalance(balance, currency);
    expect(accountBalance.getCurrency()).toBe(currency);
  });
});
