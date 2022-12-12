import Bank1Integration from "./bank_1/integration/bank_1_integration";
import Bank2Integration from "./bank_2/integration/bank_2_integration";
import BankIntegration from "./bank_integration";

export default class BankService {
  private readonly availableBankIntegrations: BankIntegration[];

  constructor() {
    const bank1Integration = new Bank1Integration();
    const bank2Integration = new Bank2Integration();

    this.availableBankIntegrations = [bank1Integration, bank2Integration];
  }

  getBalancesFromAllBanks(accountId: number) {
    return this.availableBankIntegrations.map((integration) =>
      integration.getBalance(accountId)
    );
  }

  getTransactionsFromAllBanks(accountId: number, fromDate: Date, toDate: Date) {
    return this.availableBankIntegrations.map((integration) =>
      integration.getTransactions(accountId, fromDate, toDate)
    );
  }
}
