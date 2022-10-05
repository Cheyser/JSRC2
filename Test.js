//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arrayTest1 = [];

// arrayTest1[0] = "Monday"
// arrayTest1[1] = "Tuesday"
// arrayTest1[2] = "Wednesday"
// console.log(arrayTest1);

// - Створити масив з будь-якою кількістю елементів різного типу (string, number, boolean) та
// - вивести в консоль лише цифри
// - вивести в консоль лише стрічки, які мають 4 та більше символів.
// - вивести лише булівські значення true

// let arrayrandom = ['Cheyser', 9, true, 'Hachiroku', 22, false];
// let arrayNumber = [];
// let arrayBull = [];
// let arrayTape = [];

// for (let i=0; i<arrayrandom.length; i++){
// if (typeof(arrayrandom[i])==='number'){
//     arrayNumber[i]=arrayrandom[i]
//     console.log('number', arrayNumber[i])
// }
// // if (typeof(arrayrandom[i])==='boolean'){
// //     arrayBull[i]=arrayrandom[i]
// //     console.log('boolean', arrayBull[i])
// // }
// // if (typeof(arrayrandom[i])==='string'){
// //     arrayTape[i]=arrayrandom[i]
// //     console.log('string', arrayTape[i])
// // }
// }
// // - Дано масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let mass = ['js', 'css', 'jq'];
// let first = mass.shift();
// console.log(first)

// // - Дано масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let mass = ['js', 'css', 'jq'];
// let poplast = mass.pop();
// console.log(poplast)

// // - Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let masss = [1, 2, 3, 4, 5];
// masss.pop();
// masss.pop();
// masss.push('a', 'b', 'c', 4, 5);
// console.log(masss)

// // - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let mas2 = [1, 2, 3, 4, 5];
// let first = mas2.shift();
// let last = mas2.pop()
// mas2.unshift(first, 'a', 'b');
// mas2.push('c', last, 'e')
// console.log(mas2)

// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let mas10 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// for (let i=0; i<mas10.length; i++){
//     if (mas10[i]%2===0)
//     console.log(i,mas10[i])
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let mas10 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// let newmas10 =[];
// for (let i=0; i<mas10.length; i++){
//     newmas10.push(mas10[i])
// }
// console.log(mas10)
// console.log(newmas10)
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let mas10 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// let newmas10 =[];
// for (let i=0; i<mas10.length; i++){
//     newmas10[i] = mas10[i]
// }
// console.log(mas10)
// console.log(newmas10)


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// let m99 = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i<m99.length){
//     console.log(i, m99[i]);
//     i = i+1;
// }
// 2. перебрати його циклом for
// let m99 = [2,17,13,6,22,31,45,66,100,-18];
// for (i=0; i<m99.length; i++){
//     console.log(i, m99[i]);
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let m99 = [2,17,13,6,22,31,45,66,100,-18];
// let i = 1;
// while (i<m99.length){
//     console.log(i, m99[i]);
//     i = i+2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let m99 = [2,17,13,6,22,31,45,66,100,-18];
// for (i=0; i<m99.length; i++){
//     if(i%2===1)
//     console.log(i, m99[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let m99 = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i<m99.length){
//     console.log(i, m99[i]);
//     i = i+2;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let m99 = [2,17,13,6,22,31,45,66,100,-18];
// for (i=0; i<m99.length; i++){
//     if(i%2===0)
//     console.log(i, m99[i]);
// }

// 7. замінити кожне число кратне 3 на ваше імя

// let m99 = [2,17,13,6,22,31,45,66,100,-18];
// for (i=0; i<m99.length; i++){
//     if(i%3===0){
//     m99[i]='Anriy'
//     }
//     console.log(i, m99[i]);
// }

// 8. вивести масив в зворотньому порядку.

// let m99 = [2,17,13,6,22,31,45,66,100,-18];
// for (i=m99.length-1; i>=0; i--){
//     console.log(i, m99[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let m99 = [2,17,13,6,22,31,45,66,100,-18];
// let i = m99.length-1;
// while (i>=0){
//     console.log(i, m99[i]);
//     i = i-1;
// }

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// let freemas = [];
// for(i=1; freemas.length<50; i++){
//     if (i%2===0){
//         freemas.push(i);
//     }
// }
// console.log(freemas)
// - заповнити його 50 непарними числами за допомоги циклу.
// let freemas = [];
// for(i=1; freemas.length<50; i++){
//     if (i%2===1){
//         freemas.push(i);
//     }
// }
// console.log(freemas)

// 1. Створити пустий масив та :

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let freemas = [];
// for(i=1; freemas.length<20; i++){
//         freemas.push(Math.random());
// }
// console.log(freemas)


//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let freemas = [];
// for(i=1; freemas.length<20; i++){
//         freemas.push(Math.random()*(732-8)+8);
// }
// console.log(freemas)


// //  2. Вивести за допомогою console.log кожен третій елемен
// let mas10 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// for (let i=2; i<mas10.length; i=i+3){
// console.log(mas10[i], i)
// }

// //  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let mas10 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// for (let i=2; i<mas10.length; i=i+3){
//     if(mas10[i]%2===0){
// console.log(mas10[i], i)
// }
// }


//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let mas10 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// let masnew = [];
// for (let i=2; i<mas10.length; i=i+3){
//     if(mas10[i]%2===0){
//     masnew[i] = mas10[i]
//     masnew.push(mas10[i])
//     console.log(masnew[i])
// // console.log(mas10[i], i)
// }
// }



// //  5. Вивести кожен елемент масиву, сусід справа якого є парним
// //   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let mas00 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i=0; i<mas00.length; i++){
//     if (mas00[i+1]%2===0)
//     console.log(mas00[i])
// }
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let mas09 = [100,250,50,168,120,345,188];
// let suma = 0;
// for(i=0; i<mas09.length; i++){
//     suma = mas09[i]+suma; 
// }
// suma = suma/mas09.length;
// console.log(suma);
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let freemas = [];
// let newmas = []
// for(i=0; freemas.length<20; i++){
//         freemas.push(Math.floor(Math.random()*(50)));
//         newmas[i] = freemas[i]*5
        
// }
// console.log(freemas,newmas)
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
// let mastp = ['hello', 2, 'suzuki', true, 77]
// let numbr = []
// for (i=0; i<mastp.length; i++){
// if (typeof(mastp[i])==='number')
// numbr[i] = mastp[i]
// }
// console.log(numbr.filter(Number``))

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let narr = '';
// for(i=0; i<arr.length; i++){
//     narr=narr+arr[i]
// }
// console.log(narr)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let narr = '';
// let i=0
// while (i<arr.length){
//     narr=narr+arr[i];
//     i++
// }
// console.log(narr)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let mass = ['a', 'b', 'c'];
// let lett = ''
// for(let nar of mass){
//     lett=lett+nar
// }
// console.log(lett);
// // console.log(nar)