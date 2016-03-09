'use strict';

class Employee{
	constructor(name,salary){
		this.name = name;
		this.salary = salary;
	}
	printInfo(){
		console.log(this.name+' gets '+this.salary);
	}
	updateSalary(amt){
		this.salary=amt;
	}
	getSalary(){
		return this.salary; 
	}

}

var employeesList=[];
var emp = new Employee('Emp1',1000);
employeesList.push(emp);
var emp = new Employee('Emp2',2000);
employeesList.push(emp);
var emp = new Employee('Emp3',3000);
employeesList.push(emp);
var emp = new Employee('Emp4',4000);
employeesList.push(emp);
var emp = new Employee('Emp5',3000);
employeesList.push(emp);


var addBonus = function(emp,bonusAmt){
	return emp.getSalary() + bonusAmt;
}

function updateSalaries(employeesList,fn,val){
	var i = 0;
	var len = employeesList.length;
	for(i=0;i<len;i++){
		employeesList[i].updateSalary(fn(employeesList[i],val));
		employeesList[i].printInfo();
	}
}

updateSalaries(employeesList,addBonus,10000);


