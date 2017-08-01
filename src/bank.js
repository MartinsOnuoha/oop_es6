class BankAccount {
    constructor(firstName, lastName, pin, account_balance=1500) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.pin = pin;
        this.balance = account_balance;
    }

    static checkBalance(pin) {
        return this.balance;
    }
    static accountDetail(pin) {
        details = [this.firstname, this.lastname, this.balance];
        return details;
    }
}