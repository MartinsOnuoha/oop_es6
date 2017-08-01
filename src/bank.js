class BankAccount {
    constructor(lastName, pin, account_balance=1500) {
        this.name = lastName;
        this.pin = pin;
        this.balance = account_balance;
    }

    getBalance() {
        return this.balance;
    }
    /* Encapsulation */
    getDetail(pin) {
        details = [this.name, this.balance];
        return details;
    }
    
    
    withdraw(name, amount, pin) {
        
        if (amount < 0){
          return "Invalid Amount!"
        }
        else if(pin === this.pin && name === this.name && amount < this.balance){
          this.balance -= amount;
          return "Transaction Successful! Balance is: " + this.balance;
        }
        else {
          return "Transaction Unsuccessful! Balance is: " + this.balance;
        }
            
            
    }
    
    deposit(name, amount) {
      if (name === this.name && amount > 0) {
        this.balance += amount;
        return "Transaction Successful! Balance is: " + this.balance;
      }
      else {
        return "Transaction Unsuccessful! Balance is: " + this.balance;
      }
    }
}























