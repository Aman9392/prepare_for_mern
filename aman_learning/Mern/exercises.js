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

// JavaScript Program to Find Largest Number Among Three Numbers

// let a = 6;
// let b = 6;
// let c = 5;
// // var x = Math.max(a,b,c);
// function check(a,b,c){
//     if(a>=b && a>=c){
//          return a;
//     }else if(b>=c && b>=a){
//         return b;
//     }else{
//         return c;
//     }
// }
// var x = check(a,b,c);
// console.log(`Largest no is ${x}`);

// JavaScript Program to Find the Factorial of a Number

// let a = prompt("Enter a no ");
// var fact = 1;
// if(a == 0){
//     console.log(`fact of ${a} is 1`);
// }else if(a < 0){
//     console.log(`the fact of negetive no is not posible`);
// }else{
//     for(var i=1 ; i<=a; i++){
//         fact = fact * i
//     }
//   console.log(`Fact of ${a} is ${fact}`);
// }

/// using recurdion

// let a = prompt('Enter a number');
// var fact = 1;
// function check(n){
//     if(n>a){
//         return;
//     }
//     fact = fact*a;
//     n++;
//     check(n)
// }
// check(1);
// console.log(`Fact of ${a} is ${fact}`);

// JavaScript Program to print the table of any user defined number using function
// function table(n){
//     for(var i=1; i<=10; i++){
//         var res = i*n;
//         console.log(`${n} x ${i} = ${res}`);
//     }
// }
// table(5);
// table(10);

// Program to make a simple calculator using switch case in JavaScript
// var a = prompt("Enter first no");
// var b = prompt("Enter secound no");
// var operend = prompt("Enter a symbole + || _ || / || * ")
// switch (operend) {
//     case "+":
//         var res = parseInt(a) + parseInt(b);
//         console.log(`sum of ${a} && ${b} is ${res}`);
//         break;
//     case "-":
//         var res = parseInt(a) - parseInt(b);
//         console.log(`Minus of ${a} && ${b} is ${res}`);
//         break;
//     case "/":
//         var res = parseInt(a) / parseInt(b);
//         console.log(` divide of ${a} && ${b} is ${res}`);
//         break;
//     case "*":
//         var res  = parseFloat(a) * parseFloat(b)
//         console.log(` Multiplication of ${a} && ${b} is ${res}`);
//         break;
//     default:
//         console.log(`Invalid oprends`);
// }


// Program to Check if the Numbers Have Same Last Digit 

// let a = prompt("enta a");
// let b = prompt("enta b");
// let c = prompt("enta c");

// var res1 = a%10;
// var res2 = b%10;
// var res3 = c%10;

// if(res1 === res2 && res1 === res3){
//     console.log(`${a} , ${b} , ${c} are having the same digit`);
// }else{
//     console.log(`${a} , ${b} , ${c} are not having the same digit`);
// }

// Program to Print the Fibonacci sequence
// npm install prompt-sync
// const prompt=require("prompt-sync")({sigint:true}); 
// var n = prompt('Enter no');
// var a = 0;
// var b = 1;
// console.log(a);
// console.log(b);
// for(var i=0; i<=n; i++){
//     var temp = a+b;
//     console.log(temp);
//     a = b;
//     b = temp;
// }


// Program to Check Armstrong Number in JavaScript
// const prompt=require("prompt-sync")({sigint:true})
// var n = prompt("Enter a no");
// var temp = n;
// // var noofdigit = n.toString().length
// var sum = 0;
// while(temp>0){
//     // console.log(temp); 
//     var j = temp%10;
//     // console.log("first" , j);
//     sum += j**3;
//     // sum += j**noofdigit;
//     // console.log("sum" , sum);

//     temp = parseInt(temp/10);

//     // console.log("temp", temp);
//     // console.log(`----------`);

// }if(sum == n){
//     console.log(`${n} is armstrong`);
// }else{
//     console.log(`${n} is not armstrong`); 
// }

// Program to Find Armstrong Number in an Interval in Javascript

// const prompt = require("prompt-sync")({ sigint: true })
// var a = prompt("Enter a ");
// var b = prompt("Enter b ");
// for (var i = a; i <= b; i++) {
//     var temp = i;
//     var noofdigit = i.toString().length
//     var sum = 0;
//     while (temp > 0) {
//         var j = temp % 10;
//         temp = parseInt(temp / 10);
//         sum += j ** noofdigit;
//     }
//     if (sum == i) {
//         console.log(`${a} To ${b} in armstrong no is: ${i}`);
//     } 
// }

// Program to Find the Factors of a Number in Javascript

// const prompt = require("prompt-sync")({ sigint: true })
// let a = prompt("Enter a no");
// for(var i=1; i<=a; i++){
//     if(a%i == 0){
//         console.log(i);
//     }
// }

// Program to Find Sum of a Natural Numbers using Recursion in Javascript

// function sum(num){
//    if(num>0){
//     return num + sum(num-1);
//    }else{
//     return num;
//    }
// }
//  var res = sum(1000);
//  console.log(res);

// Program to Check Palindrome using for loop in Javascript

// var string  = prompt(`Enter a string`);
// var  len = string.length;
// console.log(len);
// var msg = 'is a palindrom'
// for(var i=0; i<len/2; i++){
//     if(string[i] != string[len - 1 - i]){
//         msg = 'It is not a palindrom'
//     }
// }
// console.log(`${string} : ${msg}`);


// Program to Sort Words in Alphabetical Order in Javascript

// const prompt = require("prompt-sync")({ sigint: true })
// var string  = prompt("Enter a string");
// var  arr  = string.split(' ');
// var acending = arr.sort();
// var arrended = acending.join();
// console.log(acending);
// console.log(arrended);

// Program to Replace Characters of a String in JavaScript
// const prompt = require("prompt-sync")({ sigint: true })
// var string = prompt("Enter string")
// var reg = RegExp('Aman' , 'gi')
// var rplacech = string.replace(reg , 'pawar')
// console.log(rplacech);

// Program to Reverse a String using for loop in JavaScript
// const prompt = require("prompt-sync")({ sigint: true })
// var string  = prompt("Enter a string");
// var strlen = string.length;
// var Reverse = '';
// for(var i = strlen-1; i>=0; i--){
//       Reverse += string[i];
// }
// console.log(`${string} : Reverse : ${Reverse}`);

// Program to Convert the First Letter of a String in to Uppercase in Javascript

// const prompt = require("prompt-sync")({ sigint: true })
// var string  = prompt("Enter a string");
// var first = string.charAt(0);
// console.log(first);
// var sli = string.slice(1);
// var final = first.toUpperCase()+sli;
// console.log(`${final}`);


// Program to Check the Number of Occurrences of a Character in a String using For Loop in Javascript
// const prompt = require("prompt-sync")({ sigint: true })
// var string = prompt('Enter string');
// var Letter = prompt("Enter letter");
// var strlen = string.length;
// var count = 0;
// for (var i = 0; i < strlen; i++) {
//     if (string[i] == Letter) {
//         count++;
//     }
// }
// console.log(`${string} = ${Letter} = ${count}`);

// Program to Count the Number of Vowels in a String using Regex in Javascript
// const prompt = require("prompt-sync")({ sigint: true })
// var string = prompt("Enter string")
// var reg  = /[aeiou]/gi;
// var char = string.match(reg);
// var final = char.length;
// console.log(`${string} : count vowels : ${final}`);

// Program to Check whether a String Starts and Ends with Certain Characters in Javascript
// const prompt = require("prompt-sync")({ sigint: true })
// var string = prompt("Enter string")
// var start =  string.startsWith('A');
// console.log(start);
// var end  =    string.endsWith('e');
// console.log(end);
// if(start == true && end == true){
//     console.log(`${string}: is start with W and end with e`);
// }else if(start == true && end == false){
//     console.log(`${string}: is star with : w`);
// }else if(start == false && end == true){
//     console.log(`${string}: is end with : e`);
// }else{
//     console.log(`${string}: is end with : e`);
// }

// Program to Check whether a String Contains a Substring in Javascript

// var string = prompt("Enter a string");
// var Substring = 'the';
// var test1 = string.includes(Substring);
// console.log(test1);
// var test2  = string.indexOf(Substring);
// console.log(test2);

// Program to Check Palindrome using built-in Functions in Javascript


// var string = prompt("Entyer a string");
// console.log(string);
// var stringarr = string.split('');
// var arrrevers = stringarr.reverse();
// var  finalstr = arrrevers.join('');
// console.log(finalstr);
// if(string === finalstr){
// console.log(`${string}: is armstrong`);
// }else{   
//    console.log(`${string}: is not armstrong`);
// }
// let a = 535;
// let arr = Array.from(String(a), Number);
// var arrlen = arr.length
// for(var i=1; i<=arrlen; i++){
//     var total = arr[i]+i
// }
// console.log(total);
// var add = parseInt(arr)+parseInt(a);

// var num = 353; 
// rem = '';
// sum = 0;
// while(num)
// {
//   rem = num%10;
//   sum = sum+rem
//   num = Math.floor(num/10);
// }
// console.log(sum);