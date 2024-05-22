class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this._balance = balance; // Using underscore to indicate private property
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposit successful. New balance: ${this._balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrawal successful. New balance: ${this._balance}`);
        } else {
            console.log('Withdrawal amount exceeds balance.');
        }
    }

    get balance() {
        return this._balance;
    }
}

const account = new BankAccount('John Doe', 1000);
account.deposit(500);  // Output: Deposit successful. New balance: 1500
account.withdraw(300); // Output: Withdrawal successful. New balance: 1200
console.log(account.balance); // Output: 1200
