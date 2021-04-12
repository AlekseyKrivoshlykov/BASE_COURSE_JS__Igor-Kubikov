/*
---------------TASK-1---------------
* Написать функцию, преобразующую число в объект. 
Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в 
соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
Если число было передано вне [0, 999] диапазона, не целое число 
или вообще не число, необходимо выдать соответствующее сообщение 
с помощью console.log и вернуть пустой объект.
Вам может пригодиться:
Number.isInteger(value) – функция проверяет, является ли переданное 
число целым, подробнее здесь https://mzl.la/2XCVSsx
Math.floor(value) - метод возвращает целое число, которое меньше 
или равно данному числу (проще говоря округляет в меньшую сторону), 
подробнее здесь https://mzl.la/2Qx42SO 
Используйте также остаток от деления на 10, 
например 123 % 10 будет 3. Вам также может пригодится 
делить число на 100 и на 10.
*/

'use strict';

let number = +prompt('Введите целое число от 0 до 999.');

class ObjectNum {
	constructor(number) {
		this.units = number % 10;
		this.tens = Math.floor(number / 10) % 10;
		this.hundreds = Math.floor(number / 100);
	}

	toString() {
		return `Единицы: ${this.units}, десятки: ${this.tens}, сотни: ${this.hundreds}.`;
	}
}

/**
* Функция принимает число и раскладывает его на разряды.
*
* @param {number} number - число.
* @returns {object} - возвращает объект с 3мя свойствами.
*/
function getObjectNum (number) {
	if (number < 0 || number > 999 || number === NaN || Number.isInteger(number) === false) {
		return {};
	}
	else {
		let object = new ObjectNum(number);
		return object;
	}
}

let objectNum1 = getObjectNum(number);

if(objectNum1 === {}) {
	console.log(objectNum1);
}
else {
	objectNum1.toString();
	alert(objectNum1);
}
