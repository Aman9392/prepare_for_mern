//   1 -------way to write js-----
// alert("me");
// document.write("this is document");
// console.clear(); clear console
// console.assert(4==(6-8))

//    2 //  -------console API-------
// console.log("hello world")
// console.warn("warning");
// console.error("this is error");

// -------------java script variable--------
//    3 // what are variables ---- containres  to store a data value
// var num1 = 23;
// var num2 = 25;
// console.log(num1+num2);
// ---------4 --------data types---------
// Number
// var num1 =544;
// var num2 = 544;
// String
//  var Str1 = "amana pawar";
//  var Str2 = 'aurasoft';
//  Object
//  var mark = {
//     aman: 55,
//     pawar: 49,
// }
// console.log(mark);
// // booleans
// var a = true;
// var b = false;

// console.log(a, b);
// var und = undefined
// var und;
// console.log(und);

// var n = null;
// console.log(n);


// --------Datatypes in js-----------
// Primitive data types --- undefined , null , Boolean , Number , String , Symbol
// Reference data types ---- Array , Object
// var arr = [1, 2,3, "Aman" ,4]

// -----operator in js -------
// Airthmatic operator
// var a = 100;
// var b = 10;
// console.log("value of a+b is", a+b);
// console.log("value of a-b is", a-b);
// console.log("value of a*b is", a*b);
// console.log("value of a/b is", a/b);
// -----Assignment operator----
// var c = b;
// c += 2;
// c -= 2// c = c-2
// c *= 2;
// c /=2;
// console.log(c);
// -----------comparison operator-----------
// var x= 10;
// var y= 20;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);
// ---------operator----------
// -----or--------
//  console.log(true||true)
//  console.log(true||false)
//  console.log(false||true)
//  console.log(false||false)
//  ----------&&--------------
//  console.log(true&&true)
//  console.log(true&&false)
//  console.log(false&&true)
//  console.log(false&&false)
//   --------not -------------
// console.log(!true)
// console.log(!false)
//  ------------funtion----------
// function avg(a, b) {
//     return (a + b) / 2;
// }
// DRY-- do not repeat yourself
// c1 = avg(4, 5);
// c2 = avg(15, 20);
// console.log(c1, c2);
// ------condition loop------

// var age =  60;
// if(age>50){
//     console.log("are you elegible");
// }
// else if(age<45){
//     console.log("may be elegible");
// }
// else if(age>40){
//     console.log("hok");
// }
// else{
//     console.log("not elegible");
// }

// ---------loops------
// -----for------
// var arr = [1, 2, 3, 4, 5, 6, 7]
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
// The forEach() method calls a function for each element in an array.
// arr.forEach(function(element){
//     console.log(element)
// })
// --------while loop-----
// let j = 10;
//  while(j<arr.length){
//      console.log(arr[j]);
//      j ++;
// }
// ---------for of loop-----------
// the js for of statment loop through the values of an iterable objects
// const myarr = ['1','2','3','4','5']
// for(item of myarr){
//   console.log(item);
// }
//this for of using only itrate condition like Array and string
// --------------for in loop--------------
// for/in loop allow us to loop through the properties of object
// const obj = {
//      name : 'Aman',
//      age : 22,
//      sname: 'Pawar'
// }
//  for (prop in obj){
//   console.log(prop);
//  }
// this for lopp using only anumrable means that the property will show up


// ------do while loop---------
// do{
//     console.log(arr[j])
//     j++;
// }while(j<arr.length);
// ------break and continue statment-----
// for(var i=0; i<arr.length; i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// 27/10/22
//  ----------Array methodes -------
// let myarr = ["aman", "pawar", "yoga", "25", "indore", "bhopal"]
//  console.log(myarr.length);
//    myarr.pop();
// myarr.push("rajpur");
// myarr.shift(); first element is shift from array
// myarr.unshift();
// print new length of Array
// const newLen = myarr.unshift("barwani");
// console.log(newLen);
// myarr.toString();///// run on console
// console.log(myarr);
// map--> Creat new Array by performing  some operation on each array Element
//  let arr = [45, 24, 56]
// console.log(arr);
//   let a = arr.map((value ,index , Array ) =>{
//     console.log(value , index , Array);
//     return value +1
//  })
// console.log(a);

// Array filter methode -> filter an array with values that passes a test Create a new array
// let arr = [0, 2,3,4,5, 20,45,16,]
// let arr2 = arr.filter((a)=>{
//      return a.tag<10
// })
// console.log(arr2);

// Reduce Methode -->Reduce an array in a single function
// let arr3 = [1,5,8,9,10]
// let newarr3 = arr3.reduce((h1 , h2)=>{
//        return h1+h2
// })
//    console.log(newarr3);



// ----strings methodes in js -------
// let mystr = " Aman is on the way to way way indor";
// console.log(mystr.length);
// console.log(mystr.indexOf("way"));
// console.log(mystr.lastIndexOf("way"));
// --------sliceing------
// console.log(mystr.slice(1,4));
// -------replace-----
// d = mystr.replace("Aman", "Manish")
// -----replace  in d -------
// d = mystr.replace("on", "of");
// console.log( d, mystr);
// ---------Dates in js -------
// let myDate = new Date();
//  console.log(myDate.getDate())
//  console.log(myDate.getDay())
//  console.log(myDate.getTime())
//  console.log(myDate.getFullYear())
//  console.log(myDate.getMinutes())
//  console.log(myDate.getMonth())
// -----------DOM Manipulation-----
// The W3C Document Object Model (DOM) is a platform and language-neutral interface that
// allows programs and scripts to dynamically access and update the content, structure,
// and style of a document."


// let elem = document.getElementById('Aman');
// console.log(elem);
// let elemclass = document.getElementsByClassName('container')
// console.log(elemclass);
//   elemclass[0].style.background = "red";
// elemclass[0].classList.add("bg-primary");
//   elemclass[0].classList.remove("bg-primary");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerText);
// console.log(elemclass[0].innerHTML);

//  ------find element using tage name-----
// tn = document.getElementsByTagName('div');
// console.log(tn);

// ---------added child element-------
// createdElement = document.createElement('p')
// createdElement.innerText = "This is Aurasoft DigiTech"
// tn[1].appendChild(createdElement);

//    ----------replace element-----
// createdElement2= document.createElement('b')
// createdElement2.innerText = "This is Aurasoft "
// tn[1].replaceChild(createdElement2, createdElement);
//  removeChild(Element); -------------remove an Element----
// --------------tages ------------
// document.location
// document.title
// document.scripts
// document.URL
// document.forms
// document.links
// document.domain
// document.images

// ----Selecting Using query--------
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);



// -----------JavaScript Events---------------
// function clicked(){
//   console.log('buttan was  clicked');
// }


// window.onload = function(){
//   console.log('document loaded');
// }

// its  working on id like id="firstcontainer"----
// firstContainer.addEventListener('click' , function(){
//   document.querySelectorAll('.container')[0].innerHTML="<b> we are cliked</b>"
//   console.log("clicked ho gya")
// })
// firstContainer.addEventListener('mouseover' , function(){
//   console.log("mouse on container")
// })
// firstContainer.addEventListener('mouseout' , function(){
//   console.log("mouse out of container")
// })

// let preHTML = document.querySelectorAll('.container')[0].innerHTML

// firstContainer.addEventListener('mouseup' , function(){
//   document.querySelectorAll('.container')[0].innerHTML = preHTML
//   console.log("mouse up  cliked on container")
// })

// firstContainer.addEventListener('mousedown' , function(){
//   document.querySelectorAll('.container')[0].innerHTML="<b> we are cliked</b>"
//   console.log("mouse down cliked on container")
// })

// ---------------JavaScript  SetTimeout and SetInterval---------
// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time,
// then repeating continuously at that interval.
// -------arrow funtion -------
// function sum(a , b){
//        return(a+b);
// }
//Arrow functions allow us to write shorter function syntax:
// summ = (a, b)=>{
//   return(a+b);
// }
// -----set time out-------
// logout = ()=>{
//   document.querySelectorAll('.container')[0].innerHTML="<b> we are cliked</b>"
//     console.log("logout here")
// }
//  clr = setTimeout(logout , 2000);
//  clr = setInterval(logout , 2000)
//  -------clearInterval(clr) // clearTimeout(clr) print on console to stop setinterval and setTimeout



// ----------Js Local Storage ---------
// loacal Storage===>The localStorage object allows you to save key/value pairs in the browser.
// Note
// The localStorage object stores data with no expiration date.

// The data is not deleted when the browser is closed, and are available for future sessions.

// See Also:
// The sessionStorage Object which stores data for one session.

// (The data is deleted when the browser window is closed)
// set item ----
// localStorage.setItem('name', 'Aman')
// get item -----
// localStorage.getItem('name')
// clear storage ------
// localStorage.clear
// localStorage.removeItem('name')
// localStorage.clear();
// -----------json-------------------




// json======>
// -->JSON is a format for storing and transporting data.
// -->JSON is often used when data is sent from a server to a web page.
// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand
// * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only.
// Code for reading and generating JSON data can be written in any programming language.
// check types -----
// typeof jso
// 'string'
// typeof obj
// 'object'

// obj = { name: 'Aman', length: 1, a: { this: 'that' } }
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso)
// parsed = JSON.parse(`{"name":"Aman","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// --------------minus plus quntitiy ------------
// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const num = document.getElementById('num');
// let a = 1;
// plus.addEventListener("click", () => {
//     a++;
//     if (a < 10) {
//         console.log(a);
//     }
//     else {
//         return a;
//     }
//     num.innerText = a;
// });
// minus.addEventListener("click", () => {
//     if (a > 1) {
//         a--;
//         if (a < 10) {
//             console.log(a);
//         }
//         else {
//             return a;
//         }
//     }
//     num.innerText = a;
// });


//-------------------Es-6 in java script-------------------
// -------------let& const& var------------------
//  var-> var decleare is funcion scoped

// var  name = "Aman";
// console.log(name);
// let&const -> this decleare as block scoped

// let  name = "Aman";
// console.log(name);

// const  name = "Aman";
// console.log(name);

// var  name = "Aman";
// name = "pawar"
// console.log(name);

// const name = "Aman";
// name = "pawar"
// console.log(name);

// function  load(aura){
//   if(aura){
//     let name = "Aman";
//     const sname = "pawar";
//     console.log("my name is"+name+ "" +sname);
//   }
// console.log("my name is"+name+ "" +sname);
// }
// load(true);

// let win = "pak" ;
// if(true){
//   let win = "India"
//   console.log(win);
// }
// console.log(win);
// ---------------------tampalte litrals ---------------
// Template literals-->  Template literals allow embedded expressions, multi-line strings and string interpolation.
// Template literals are the string literals enclosed by the backtick  and can contain placeholders indicated by dollar sign curly braces.
//  let  name = "aman";
//  let sname = "pawar";
//  es5
//  console.log("my name is" + name + "my last name" + sname );
// es6
// console.log(`my first name ${name} my last name ${sname}`);
// let a = 20;
// let b = 30;
// console.log('fifty is '+ (a+b)+ 'and not'+(2*a+b));
// console.log(`fiifty is ${a+b} and not ${2*a+b}`);
// ---------------tamplate litrals methodes--------------
// startswith methode---
// let  name = 'Aman';
// let sname = "pawar";
// const fname = `${name}`
// const lname = `${sname}`
//  console.log(`${name}`.startsWith('a'));
//  console.log(`${name}`.endsWith('n'));
//  console.log(`${name}`.includes('pawar'));
//  console.log(`fname lname`.repeat(10));

// ------------Array Destructuring -------------------
// Destructuring assignment--it is a Array Destructuring syntex in js that is unpacked  Values form array
// const myarr = ['js' , 'aman', 'c', 'java'];
// let [top1, top2, top3, top4] = myarr;
// console.log(`my first programme in ${top1}`);
// console.log(myarr.length);
// let [top1,,, toplast] = myarr;
// console.log(`my array ${top1} mylastarray ${toplast}`);
// let top1 , top2
// [top1 , top2] = myarr
// console.log(`my array ${top1} mylastarray ${top2}`);

// ---------------Object Destructuring---------------
// Object Destructuring---> Destructuring makes it easy to extract only what is needed.
// const data = {
//   name : 'Aman',
//   age : 26,
//   deg : 'B.Tech',
//   brand : {
//     tag: 'candy',
//     price: 45
//   }
// }

// let {name , age , deg , brand} = data;
// console.log(`my name is ${name}  my age is ${age} my deg is ${deg} my brand is ${brand.price}`);
//  ------------------Arrow function----------------
// Arrow function-> that is also called fat Arrow function they introduced a new way to writing to concise function
// const sum = () =>{
//   let a = 10;
//   let b = 20;
//   return(a+b);
// }
// console.log(sum());

// let a = 10;
// let b = 40;
// const sum = () => a+b ;
// console.log(sum());

// const sum = (a,b) => a*b ;
// console.log(sum(15 , 25));



// ---------------------------Default Parameters ------------------
// Default Parameters -> Default Parameters  is allow named parameter to be initialized with defult  VALUE if no value or undifined is passed
//  const mult = (a,b = 2) =>{
//     console.log(`multiplication is : ${a*b}`);
//  }
//  mult(4);

// ----------------------- Rest Parameters-------------
// Rest Parameters-- > it is improved way to handle function parameter allowing us most easily handle various input parameter in a function
// the rest parameter syntex allows us to represent an indifinite number of argument as an array
// function sum(...input){
//   console.log(...input);
//   total = 0;
//   for(let i of input){
//      total +=i;
//   }
//   console.log(total);
// }
// sum(1,2,3,4,5,6,7,8,9,10)
// function fun(a,b, ...c){
//     console.log(`${a} ${b}`);
//     console.log(c[0]);
//     console.log(c.length);
//     console.log(c.includes(5));
// }
// fun (1,2,3,4,5);

// ----------sprade operator---------------
// sprade operator--> The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object
// into another array or object.
// function sum(a,b,c){
// console.log(a+b+c);
// }
// var mmyarr = [5,6,7];
// sum(...mmyarr);

//merge two array and replce concat mehtode
// let arr1 = [1,2,3];
// let arr2 = [6,5,4];
//  arr1 = [...arr1,...arr2]
//  console.log(arr1);

//replace copy() methode push() orperator
// let arr1 = [1,2,3];
// let arr3 = [8,8,9];
//   arr2 = [...arr1,4,5,...arr3]
//   console.log(arr2);

// -----------------------JavaScript Math object-----------------------
// JavaScript Math object-> The JavaScript Math object allows you to perform mathematical tasks on numbers.
//sign(x)--> Math.sign(x) returns if x is negative, null or positive:

// let number = -6.555
// let number = 0
// console.log(Math.sign(number));

// Math.trunc()->Math.trunc(x) returns the integer part of x:

// console.log(Math.trunc(number));


// JavaScript provides 8 mathematical constants that can be accessed as Math properties:
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E


// ----------------- Exponentiation Operator-----------------------
// Exponentiation Operator--> The exponentiation operator (**) raises the first operand to the power of the second operand:
// let a = 5;
// let b = 3
// console.log(a**5);

// ------------------------New Numbers & Global Methods--------------------
// 1) isFinite() Global methode -> it return false if the arguments infinity or NaN
// let num = 55;
// let num =NaN;
// console.log(isFinite(num));

// 2) isNaN() Global Methode -> it return true if the argument is NaN .otherwise it return false
// let num = 5 ;
// let num = NaN ;
// let num = 'Aman' ;
// console.log(isNaN(num));
// console.log(Number.isNaN(num));

// 3) Number.isIntiger Methode-> it return true if the argument is an integer
//  let num = -5.1;
//  console.log(Number.isInteger(num));
// const b = 20; 
// console.log(Math.sqrt(b));

// function setItem(product) {
//     let cartItem = localStorage.getItem('productsInCart');

//     cartItem = JSON.parse(cartItem);
//     console.log("carItem" , cartItem );
//     if (cartItem !== null) {
//         const itemInCart = cartItem.filter((item) => item.tag === product.tag)
//         console.log("itemInCart", itemInCart);
//         if (itemInCart.length > 0) {
//             [product.tag].incart += 1;
//             cartItem = [...cartItem, product]
//         }
//         else{
//             [product.tag].incart= 1;
//             cartItem = [...cartItem, product]
//         }
//     }
//     else {
//         product.incart = 1;
//         cartItem = [product]
//     }
//     localStorage.setItem("productsInCart", JSON.stringify(cartItem));
//         // displayCart();
//         // totalCost(product);
//     }

// ----------------oops in java Scripts------
// -----------------------class------------------------
// class=> a class is type of function , but instead of using the keyword fucntion to initate  it ,
//        we use the keyword calss and the properties assigned inside the constructor()methode

// constructor=> The constructor method is a special method of a class for creating and initializing
// an object instance of that class.

// object=> The Object type represents one of JavaScript's data types. 
//         It is used to store various keyed collections and more complex entities. 
//         Objects can be created using the Object() constructor or the object initializer / literal syntax.

// class student {
//     constructor(name, age, cls) {
//         this.myname = name
//         this.myage = age
//         this.mycls = cls
//     }
//     //instance  methode
//     biodata() {
//         return`my name is ${this.myname}. my age is ${this.myage}. my class is ${this.mycls}`
//     }
// }
// class player extends student{
//     constructor(name, age, cls, game){
//         super(name, age, cls);
//         this.mygame = game
//     }
//     play(){
//        return `${super.biodata()}. I am a player of the ${this.mygame}`
//     }

// }
// let obj1 = new player('Aman',22,'B.Tech','circket');
//   console.log(obj1.play());

// -------------CONTINUE JS WITH ARRAY  (code with harry)-----------------

 
