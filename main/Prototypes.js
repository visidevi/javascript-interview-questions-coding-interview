/**
 * 
 * Class Employee
 */
const Employee = function (id, name) {
    if (!id || !name) { 
      throw new Error("Employee id and name are mandatory");
    }
    this.id = id;
    this.name = name;
    // Employee.prototype.setSalary = function(salary) {
    //   this.salary = salary;
    // };
    Employee.prototype.getId= function () {
      return this.id;
    };
    Employee.prototype.getName=  function() {
      return this.name;
    };
    Employee.prototype.getSalary= function() {
      return this.salary
    };

  }


const Manager = function (params) {
  Employee.apply(this, arguments)
}

console.log(Employee.prototype.getId())
console.log(Manager.prototype)
/**
 * Prototype
*/

