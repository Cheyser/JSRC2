// 1) створити функцію яка приймає масив та виводить його
// function newmas (mass = []) {
//     console.log(mass)
// }
// newmas ([1, 5, 7])

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function randomNum (rand = []) {
//     for (let i=0; i<rand.length; i++){
//     rand[i] = Math.floor((Math.random()*25))
//     }
//     return rand
// }
// newmas(randomNum([ , , , ]))

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function num (n1, n2, n3){
//     if (n1<n2 && n1<n3)
//     console.log(n1)
//     else if (n2<n1 && n2<n3)
//     console.log(n2)
//     else
//     console.log(n3)
// }
// num (4,5,3)

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function num (n1, n2, n3){
//     if (n1>n2 && n1>n3)
//     console.log(n1)
//     else if (n2>n1 && n2>n3)
//     console.log(n2)
//     else
//     console.log(n3)
// }
// num (4,5,3)
// 5) створити функцію яка повертає найбільше число з масиву
// function nummx (maxim){
//     let numbr = [];
//     for(let i=0; i<maxim.length; i++){
//         numbr[i] = Number(maxim[i])
        
//     }
//     console.log(Math.max(...numbr))
// }
// nummx ([7,4,1,6,44,82,1])

// function n1 (max = [])
// 6) створити функцію яка повертає найменьше число з масиву
// function nummn (manim){
//     console.log(Math.min(...manim))
// }
// nummn ([7,4,1,6,44,1])
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function allmas (mass=[]){
//     let zero = 0
// for (let i=0; i<mass.length; i++){
//     zero = mass[i]+zero
// }
// return console.log(zero)
// }
// allmas([5,6,1,12])
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function allmas (mass=[]){
//     let zero = 0
// for (let i=0; i<mass.length; i++){
//     zero = mass[i]+zero
// }
// return console.log(zero/mass.length)
// }
// allmas([5,6,1,12])
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function randomObj (obj,bomj){
//     for (let i = 0; i<massAll.length; i++){
//     return (Object.keys(obj) + Object.keys(bomj))
//     }
        
// }

// Computer = {
//     CPU: 'i5 12500',
//     GPU: '3070ti',
//     RAM: 16,
//     SSD: 1000,
//     HHD: false
// }

// Accessories = {
//     Mouse: 'X7 k705',
//     Keyboard: true,
//     Monitor: 550
// }
// let massAll = [Computer, Accessories];
// console.log(randomObj(...massAll))

// function randomObj (){
//     let mass = [(Object.keys(Computer)+Object.keys(Accessories))]
//     return mass
// }

// Computer = {
//     CPU: 'i5 12500',
//     GPU: '3070ti',
//     RAM: 16,
//     SSD: 1000,
//     HHD: false
// }

// Accessories = {
//     Mouse: 'X7 k705',
//     Keyboard: true,
//     Monitor: 550
// }
// console.log(randomObj())

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function randomObj (){
//     let mass = [(Object.values(Computer)+Object.values(Accessories))]
//     return mass
// }

// Computer = {
//     CPU: 'i5 12500',
//     GPU: '3070ti',
//     RAM: 16,
//     SSD: 1000,
//     HHD: false
// }

// Accessories = {
//     Mouse: 'X7 k705',
//     Keyboard: true,
//     Monitor: 550
// }
// console.log(randomObj())

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// function sumamas (mas1, mas2){
//     let sum = []
// for (let indx in mas1){
//     sum.push(mas1[indx]+mas2[indx])
// }
// return console.log(sum)
// }
// sumamas ([1,2,3,4], [2,3,4,5])


// =========================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, 
//   а виводить найбільше (Math використовувати заборонено);

// function allnum (){
//     let maximum = arguments[0];
//     let minimum = arguments[0];
//     for (let allnum of arguments){
//         if (allnum > maximum) maximum = allnum;
//         if (allnum < minimum) minimum = allnum;
//     }
//     console.log(maximum);
//     console.log(minimum);
//     return minimum;
// }
// allnum (1,2,5,6,8)

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// function allnew (objects, variant){
//     let araara = []
//     for (let obj of objects){
//         if (variant === 'values'){
//             for (let value of Object.values(obj)){
//            araara.push(value)
           
//         }
//         }
//         else if (variant === 'keys'){
//             for (let keys of Object.keys(obj)){
//                 araara.push(keys)
//             }
//         }
//         else {
//             araara = 'please print "keys" or "values"'
//         }

//     }
//     return console.log(araara)
// }
// Computer = {
//     CPU: 'i5 12500',
//     GPU: '3070ti',
//     RAM: 16,
//     SSD: 1000,
//     HHD: false
// }

// Accessories = {
//     Mouse: 'X7 k705',
//     Keyboard: true,
//     Monitor: 50
// }
// allvar = [Computer, Accessories]
// allnew (allvar, true)

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// =================================
// Тут потрібно гуглити. Ми цього не розглядали.
// Для тих, хто не боїться пошукової строки

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
