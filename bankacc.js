function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(value) {
            balance += value;
            console.log(`Deposited: ${value}, Current Balance: ${balance}`);
        },

        withdraw(value) {
            balance -= value;
            console.log(`Withdraw: ${value}, Current Balance: ${balance}`);
        },

        checkBalance() {
            console.log(`Current Balance: ${balance}`);
        }
    };
}


const account = createBankAccount(5000);

account.checkBalance();   
account.deposit(2000);      
account.checkBalance();   


class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.transactionCount = 0;
    }

    deposit(amount) {
        this.balance += amount;
        this.transactionCount++;
        console.log(`Deposited ₹${amount}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.transactionCount++;
            console.log(`Withdrawn ₹${amount}`);
        } else {
            console.log("Insufficient Balance");
        }
    }

    showDetails() {
        console.log("Name:", this.name);
        console.log("Balance:", this.balance);
        console.log("Transactions:", this.transactionCount);
    }
}

const acc = new BankAccount("Himanshu", 5000);

acc.deposit(1000);
acc.withdraw(500);
acc.deposit(2000);

acc.showDetails();