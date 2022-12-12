import BankService from "../services/banks/bank_service";

export default class BankController {
  constructor(private readonly bankService: BankService) {}

  printBalances(accountId: number) {
    const balances = this.bankService.getBalancesFromAllBanks(accountId);
    console.log("balances", balances);

    return balances;
  }

  printTransactions(accountId: number, fromDate: Date, toDate: Date) {
    const transactions = this.bankService.getTransactionsFromAllBanks(
      accountId,
      fromDate,
      toDate
    );

    console.log("transactions", transactions);

    return transactions;
  }
}
