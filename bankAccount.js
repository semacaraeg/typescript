var BankAccount = /** @class */ (function () {
    function BankAccount(name, amount, transaction) {
        this.owner = name;
        this.balance = amount;
        this.transaction = transaction;
    }
    BankAccount.prototype.retrieveBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.withdraw = function (withdrawAmount) {
        this.balance -= withdrawAmount;
    };
    BankAccount.prototype.deposit = function (depositAmount) {
        this.balance += depositAmount;
    };
    return BankAccount;
}());
//some checks
var sarahBank = new BankAccount("Sarah", 1000, [1, 2]);
console.log(sarahBank);
console.log(sarahBank.retrieveBalance());
sarahBank.withdraw(50);
console.log(sarahBank);
sarahBank.deposit(5000);
console.log(sarahBank);
