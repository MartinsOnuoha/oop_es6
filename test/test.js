const assert = require('chai').assert;
const BankAccount = require('../src/bank.js').BankAccount;
const CurrenAccount = require('../src/bank.js').CurrentAccount;

let account1 = new BankAccount('Martins', 123);
let current1 = new CurrenAccount('Martins', 123);

describe('Accounts', function() {

    describe("checks user account balance", function() {
        it('should return current balance', function() {
            assert.equal(account1.getBalance, "29");
        });
    });
});