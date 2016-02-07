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

var addBonus = function(sal,bonusAmt){
	return sal+bonusAmt;
}

var addIncrement = function(sal,incrementPercent){
	return sal+sal*incrementPercent*0.01;
}

function updateSalary(empArr,fn,bonusAmt){
	totEmployees =	empArr.length;
	for(i=0;i<totEmployees;i++){
		empArr[i].salary =	fn(empArr[i].salary,bonusAmt);
		console.log(empArr[i].name+' gets '+empArr[i].salary);
	}
}

// Add Bonus
updateSalary(Employees,addBonus,5000);
updateSalary(Employees,addIncrement,10);


