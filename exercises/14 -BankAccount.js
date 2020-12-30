class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(money) {
    this.balance += money;
    return this.balance;
  }

  withdraw(money) {
    this.balance -= money;
    return this.balance;
  }

  whosAccount() {
    console.log(`This account belongs to: ${this.owner} and their current balance is: ${this.balance}kr`);
  }

}

class Person {
  constructor(name) {
    this.name = name;
  }
}

let matt = new Person('Matt', 100);
console.log(matt);
matt.withdraw(10);
matt.whosAccount();