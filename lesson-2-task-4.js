'use strict';

/*
---------------TASK-4---------------
Реализовать основные 4 арифметические операции 
(+, -, /, *) в виде функций с двумя параметрами. 
Т.е. например, функция для сложения должна принимать 
два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.
*/

let a = +prompt('Введите первое число.');
let b = +prompt('Введите второе число');

/*
Т.к. я использовал стрелочную функцию в одну строку, то return
писать не обязательно, значение будет возвращаться по умолчанию.
*/

let getSum = (a, b) => a + b;
alert(getSum(a, b));

let getSubtraction = (a, b) => a - b;
alert(getSubtraction(a, b));

let getDivision = (a, b) => a / b;
alert(getDivision(a, b));

let getMultiplication = (a, b) => a * b;
alert(getMultiplication(a, b));
