const assert = require('chai').assert;
const BankAccount = require('../src/bank.js').BankAccount;
const CurrenAccount = require('../src/bank.js').CurrentAccount;

let account1 = new BankAccount('Martins', 123);
let current1 = new CurrenAccount('Martins', 123);

describe('Accounts', function() {

    describe("checks user account balance", function() {
        it('should return current balance', function() {
            assert.equal(account1.getBalance(), account1.balance);
        });

        it('should return user details', function() {
            assert.equal(account1.getDetail(123), account1.name + ', ' + account1.balance);
        });
    });
});