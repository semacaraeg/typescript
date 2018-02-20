class BankAccount {
    owner: string;
    balance: number;
    transaction: number[];
    
    constructor(name:string, amount:number, transaction:number[]){
        this.owner = name;
        this.balance = amount;
        this.transaction = transaction;
    }
    
    retrieveBalance() : number{
        return this.balance;
    }
    withdraw(withdrawAmount:number){
         this.balance -= withdrawAmount;
    }
    deposit(depositAmount: number){
         this.balance += depositAmount;
    }
}

//some checks
let sarahBank = new BankAccount("Sarah", 1000, [1,2]);
console.log(sarahBank);
console.log(sarahBank.retrieveBalance());
sarahBank.withdraw(50);
console.log(sarahBank);
sarahBank.deposit(5000);
console.log(sarahBank);