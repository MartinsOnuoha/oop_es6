const assert = require('chai').assert;
const BankAccount = require('../src/bank.js').BankAccount;
const CurrenAccount = require('../src/bank.js').CurrentAccount;

// initialise variables
let account1 = new BankAccount('Martins', 123);
let current1 = new CurrenAccount('Martins', 123);
let amount = 500;
let success = "Transaction Successful! Balance is: ";
let failure = "Transaction Unsuccessful! Balance is: ";

describe('Accounts', function() {

    describe("checks user account", function() {
        it('should return current balance', function() {
            assert.equal(account1.getBalance(), account1.balance);
        });

        it('should return user details', function() {
            assert.equal(account1.getDetail(123), account1.name + ', ' + account1.balance);
        });

    });

      describe("successful transaction", function(){
          it('should deduct amount from balance', function() {
          assert.equal(account1.withdraw(account1.name, amount, account1.pin), success + account1.balance);
        });
      });


    });
