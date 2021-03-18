'use strict';

/*
---------------TASK-5---------------
Реализовать функцию с тремя параметрами: 
function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – 
строка с названием операции. В зависимости от
переданного значения операции (использовать switch) 
выполнить одну из арифметических операций
(использовать функции из задания 4) и 
вернуть полученное значение.
*/

let getSum = (a, b) => a + b;

let getSubtraction = (a, b) => a - b;

let getDivision = (a, b) => a / b;

let getMultiplication = (a, b) => a * b;

function mathOperation(arg1, arg2, operation) {
	switch(operation) {
		case getSum:
		return getSum(arg1, arg2);

		case getSubtraction:
		return getSubtraction(arg1, arg2);

		case getDivision:
		return getDivision(arg1, arg2);

		case getMultiplication:
		return getMultiplication(arg1, arg2);
	}
}

let a = 5, b = 6;

let sumValue = mathOperation(a, b, getSum);
let subValue = mathOperation(a, b, getSubtraction);
let divValue = mathOperation(a, b, getDivision);
let mulValue = mathOperation(a, b, getMultiplication);

