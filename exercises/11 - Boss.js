class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

}

class Boss extends Employee {
  constructor(name, age, salary, level) {
    super(name,age, salary);
    this.level = level;
  }
}

class Company {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  listBosses() {
    const listOfBosses = this.employees.filter((x) => x instanceof Boss);
    for (let i = 0; i < listOfBosses.length; i++) {
      const element = listOfBosses[i].name;
      console.log(element);
  }
}

  listEmployees(list = this.employees) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] instanceof Boss) {
        console.log(list[i].name + ' - Boss');
      } else if (list[i] instanceof Employee) {
        console.log(list[i].name + ' - Employee');
      } else {
        console.log(list[i] + 'Who is this?');
      }
    }
  }

  addEmployee(name, age, salary) {
    this.employees.push(new Employee(name, age, salary));
  }

  addBoss(name, age, salary, level) {
    this.employees.push(new Boss(name, age, salary, level));
  }

  salariesSum(list = this.employees) {
    const salaryEmployees = list.map(employee => employee.salary).reduce((accum, currentValue) =>  accum + currentValue);
    console.log(`The sum the employess salaries are: ${salaryEmployees}kr`);      
  }

}

const company1 = new Company('BombayWorks');

company1.listEmployees();
company1.addEmployee('Emma', 20, 24000);
company1.addEmployee('Matt', 24, 28000);
company1.addEmployee('Eva', 34, 33000);
company1.addEmployee('Adam', 63, 54000);
company1.addEmployee('Brian', 29, 30000);
company1.addBoss('Göran', 54, 60000, 100);
company1.addBoss('Bengt', 60, 65500, 95);
company1.addBoss('Goran', 54, 61500, 90);
company1.listEmployees();
company1.salariesSum();

