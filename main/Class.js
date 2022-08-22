/**
 * 
 * Class Employee
 */
class Employee {
  constructor(id, name) {
    if (!id || !name) { 
      throw new Error("Employee id and name are mandatory");
    }
    this.id = id;
    this.name = name;
  }
  setSalary(salary) {
    this.salary = salary
  }
  getId() {
    return this.id
  }
  getName() {
    return this.name
  }
  getSalary() {
    return this.salary
  }
}
class Manager extends Employee {
  setDepartment(name) {
    this.department = name
  }
  getDepartment() {
    return this.department
  }
}
const employee = new Employee(1, "Jack")
employee.setSalary(1000)
console.log(employee)
console.dir(employee)
const boss = new Manager(1, "Martin")
boss.setDepartment("R&D")
console.log(boss)

/**
 * Prototype
*/

