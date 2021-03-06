'use strict';

/*
---------------TASK-1---------------
Объясните почему код даёт именно такие результаты?
*/

/* 
1. Объявляем переменные а, b записываем в них 1. 
Объявляем переменные c, d ничего им не присваиваем,
значение этих переменных undefined.
2. Т.к. инкримент имеет префиксную форму, то значение
a будет увеличено на единицу (т.е. ++a это уже 2) и записано в c.
3. Выводим значение c.
*/

//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

/* 
1. Постфиксная форма инкримента, в переменную d запишется старое
значение переменной b = 1.
2. Выводим d.
*/

//пример 2
d = b++;
alert(d); //ответ: 1

/* 
1. a была увеличина на единицу в примере № 1, поэтому её значение уже 2. 
a с помощью преикримента увеличивается на единицу и равняется 3.
Т.е. 2 попадает в выражение ++a и становится 3кой.
2. c = 2 + 3 = 5.
3. Выводим c.
*/

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5

/* 
1. Во 2 примере b равнялось 1, был использован постинкримент, он вернул
в том примере старое значение b и увеличил новое значение b на 1.
Т.е. в примере № 4 в выражении b++ значение b = 2.
2. d = 2 + 2.
3. Выводим d.
*/

//пример 4
d = 2 + b++;
alert(d); //ответ: 4

/* 
1. В примере № 1 a увеличена на единицу, т.е. равняется 2.
В примере № 3 а ещё раз увеличена на единицу, поэтому результат
алерта 3.
2. В примере № 2 b++ возвращает старое значение переменной b и 
инкриментирует его после (как я представляю, хранит в памяти значение 2).
В примере № 4 b++ возвращает старое значение переменной (со 2 примера), т.е.
возвращает 2 и инкриментирует её на единицу, поэтому результат равен 3.
*/

alert(a); //3
alert(b); //3

