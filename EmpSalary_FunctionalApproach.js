var Employees = [
{
	name:'Emp1',
	salary: 5000
},
{
	name:'Emp2',
	salary: 9000
},
{
	name:'Emp3',
	salary: 3500
},
{
	name:'Emp4',
	salary: 2000
},
{
	name:'Emp5',
	salary: 3000
},
{
	name:'Emp6',
	salary: 2000
},
{
	name:'Emp7',
	salary: 2000
},
{
	name:'Emp8',
	salary: 8000
},

{
	name:'Emp9',
	salary: 6000
},
{
	name:'Emp10',
	salary: 5700
}
];


// Functional approach to this problem

// Identify what is going to be changing and what is going to be constant.
// Here in our example, updation of salaries is going to be constant but how you 
// update is going to change. So apply a function which is going to handle the change 
// for you to each of the elements of the array.
// Here we write a function updateSalary which takes array and a function. 
// This function updateSalary is going to handle the constant part of 
// going through the array and updating the salaries of each employee
// The function passed to this updateSalary() is going to take care of 
// how to update the salary. The value passed

function updateSalary(empArr,fn,value){
	totEmployees =	empArr.length;
	for(i=0;i<totEmployees;i++){
		empArr[i].salary = fn(empArr[i],value);
		console.log(empArr[i].name+' gets '+empArr[i].salary);
	}
}


var addBonus = function(emp,bonusAmt){
	return emp.salary+bonusAmt;
}

// If I want to add 10000 USD bonus to all employees,

updateSalary(Employees,addBonus,10000);

var addIncrement = function(emp,increment){
	return emp.salary+emp.salary*increment*0.01;
}

// If I want to give 10% increment to all employees
updateSalary(Employees,addIncrement,10);

