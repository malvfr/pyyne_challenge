import BankController from "./src/controllers/bank_controller";
import BankService from "./src/services/banks/bank_service";

const bankService = new BankService();
const controller = new BankController(bankService);

// Simulating calls
controller.printBalances(1);
controller.printTransactions(1, new Date(), new Date());
