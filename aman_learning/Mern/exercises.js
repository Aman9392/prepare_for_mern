// 1) Write a JavaScript program to display the current day and time in the following format
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


// var today = new Date();
// var day = today.getDay();
// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
// console.log("Today is : " + daylist[day] + ".");
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// var prepand = (hour >= 12) ? " PM " : " AM ";
// console.log("prepand" , prepand);
// hour = (hour >= 12) ? hour - 12 : hour;
// console.log("hour" ,hour);
// if (hour === 0 && prepand === ' PM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = 'Noon';
//     }
//     else {
//         hour = 12;
//         prepand = ' PM';
//     }
// }
// if (hour === 0 && prepand === ' AM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Midnight';
//     }
//     else {
//         hour = 12;
//         prepand = ' AM';
//     }
// }
// console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);
// --------------------------basic program-------------------
// console.log('hello Aamn');
// alert('Aman Pawar')
// document.write('Aman Pawar');
// ---add two number-------
// let a = 10;
// let b = 20;
// var c = a+b;
// console.log("sum of:" +a+ "and" +b+ "is" +c);
// --dynamic----

// let a = prompt("Enter first no")
// let b = prompt("Enter Secound no")
// var c = parseInt(a)+parseInt(b);
// console.log("sum of:" +a+ "and" +b+ "is" +c);

// ----squre root-----
//  let a = prompt("enter no")
//  let b = Math.sqrt(a);
//  console.log(b);
// ----calculate of area of tingle----
// var base = prompt("Enter base");
// var height = prompt("Enter hieght")
// var area = (base*height)/2;
// console.log('Area:' +base+ " " +height+ " "+area);

// --------------------tringle area----
// formula
// s= (a+b+c)/2
// Area = s*(s-a)*(s-b)*(s-c) with squreroot
//  var a=20;
//  var b=25;
//  var c=23;
//  var s = (a+b+c)/2
//  var temp = s*(s-a)*(s-b)*(s-c)
//  var area = Math.sqrt(temp)
//  console.log(area);

// -------swap to no------
// let a = prompt("Enter value of a");
// let b = prompt("Enter value of b");
// console.log(`value of a is ${a} , value of b is ${b}`);
// temp = a;
// a = b;
// b = temp;
// console.log(`After swaping: \n value of a is ${a} \n value of b is ${b}`);

// without using third variable--
//  let a = 10;
//  let b = 20;
//  a = a+b; //30
//  b = a-b //10 
//  a = a-b; //20 
//  console.log(`after swaping : a = ${a} , b = ${b}`);

// --------------miles to killometer ------
// function convert(){
//     var Kms = document.getElementById('data').value;
//     const factor = 0.621371;
//     var miles = Kms*factor;
//     document.getElementById('res').innerHTML = `${miles} Miles`
// }

// ------celsius to ferenights-------------
// formula = vlaue*1.8+32
// function convert(){
//     var c = document.getElementById('data').value;
//     const ferenights = (c*1.8)+32;
//     document.getElementById('res').innerText = `${ferenights} Ferenghiets`
// }

// ---------------JavaScript Program to Check if a number is Positive, Negative, or Zero------
// function convert(){
//     // var number = document.getElementById('data').value;
//     var number = 0
//     // const check = Math.sign(number);
//     if(number>0){
//         check = `${number} number is positive`
//     }
//     else if(number<0) {
//         check = `${number} number is negetive`
//     }
//     else if(number == 0){
//         check = `${number} number is Zero`
//     }
//     // document.getElementById('res').innerText = `${check}`
//     console.log(check);
// }
// convert();

// --JavaScript Program to Generate a Random Number using Math.random() Function---
// methode =>  Math.rendom();
// formula to genrate random Number   Math.random*(highestno-lowestno)+lowestno gerete flooting number
// Genrate intiger no the formula is Math.floor(Math.random*(highestno-lowestno)+lowestno) 
// function number(){
//     var x = Math.random();
//     console.log(`befor calculation: ${x}`);
//     // x = x*(10000-1)+1; // for flooting no 
//     // x = Math.floor(x*(10000-1)+1); // for intiger no 
//     x = (x*10000) // for OTP no 
//     console.log(`After calculation: ${x}`);
// }
// number();

// ----------- JavaScript Program to Check if a Number is Odd or Even----

// function number(){
//     var a = 5;
//     if(a%2 == 0){
//         console.log(`${a}:is even`);
//     }
//     else{
//         console.log(`${a}:is odd`);
//     }
// }
// number();
//   let a = prompt('Enter no')
//   var x = a%2 === 0 ? "even" : "odd" 
//   console.log(`${a} no is ${x} `);

// --- JavaScript Program to Check if a Number is a Prime Number---
// var number = prompt("Enter a no")
// if (number == 1) {
//     console.log(`${number} nither prime or not composite no`);
// } else if (number < 0) {
//     console.log(`${number} not a prime no`);
// } else {
//     for (var i = 2; i < number; i++) {
//         if (number % i == 0) {
//             var res = `${number}: is not a prime number`
//             break;
//         }
//         else{
//             var res = `${number}: is  a prime number`
//         }
//     }
//     console.log(res);
// }
