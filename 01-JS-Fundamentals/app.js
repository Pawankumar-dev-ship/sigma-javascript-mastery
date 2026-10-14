// TOPIC: JavaScript Fundamentals - Loops, Objects, Functions & Scope (Practice & Concepts)
// SECTION 1: ARRAYS & BASIC LOOPS
// 1. Array Declarations & Methods Basics


// let student1="pawan";
// let student2="rahul";
// let student3="sachin";

// let students=["pawan","rahul","sachin"];

//Array Methods//

// let cars = ["audi","bmw","xuv","maruti"];

// 2. Basic For-Loop Variations (Forward, Backward & Custom Steps)
 //Loops//

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// for(let i=10; i>=1; i = i-3){
//     console.log(i);
// }


//3. Printing Odd Numbers (Forward & Backward) //

// for(let i=1; i<=15;i=i+2){
//     console.log(i);
// }

// console.log("backwards");

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }


// 4. Printing Even Numbers (Forward & Backward) //

// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }

// console.log("backwards");

// for(let i=10; i>=2; i = i-2){
//     console.log(i);
// }

//Printing Multiplication table (User Input & Static Step Loops) //

// let n = prompt("write your number");
// n = parseInt(n);

// for(let i=n; i<n*10; i=i+n){
//     console.log(i);
// }



// for(let i=5; i<=50; i = i+5){

//     console.log(i);

// }

// console.log("backwards");

// for(let i=50; i>=5; i = i-5){

//     console.log(i);

// }

//Nested for Loop//

// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }


//while Loop//

// let i=5;

// while(i>=1){
//     console.log(i);
//     i--;
// }

// let i=0;
// while(i<=20){
//     console.log(i);
//     i = i+2;


//favoriteMovie//


// const favMovie ="avatar";
// let guess = prompt("guess my favorite movie");

// while( ( guess != favMovie) && (guess !="quit")){
//     guess = prompt("wrong guess. please try again");

// }

// if(guess == favMovie){
//     console.log("congrats!!");
// }else{
//     console.log("you quit");
// }




// const favMovie ="avatar";
// let guess = prompt("guess my favorite movie");

// while(guess != favMovie) {
//         if(guess == "quit"){
//         console.log("you quit");
//         break;
//         }
//     guess = prompt("wrong guess. please try again");

// }

// if(guess == favMovie){
//     console.log("congrats!!");
// }


//break keyword //

// let i=1;
// while(i<=5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// console.log("we used break at 3");


//Loops With Arrays


// let fruits =["mango","apple","banana","litchi", "orange"];

// for(let i=0; i<fruits.length;i++){
//     console.log(i, fruits[i]);
// }


// odd  index in fruits //

// let fruits =["mango","apple","banana","litchi", "orange"];

// for(let i=1; i<fruits.length; i=i+2){
//     console.log(i, fruits[i]);
// }


// let fruits =["mango","apple","banana","litchi", "orange"];
// fruits.push("pineapple");

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }


// Loops with Arrays//

// Nested Loops with Nested Arrays

// let heroes =[
//     ["ironman","spiderman", "thro"],
//     ["superman","wonder woman","flash"]
// ]

// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);

//     for(let j=0; j<heroes[i].length;j++){
//         console.log(`j=${j}, ${heroes[i],[j]}`);
//     }
// }

// let student = [["aman",95],["pawan",94.4],["radha",100]];

// for(let i=0; i<student.length; i++){
//     console.log(`info of student #${i+1}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j])

//     }
// }


// for-of Loops//

// let fruits = ["mango","apple","banana","orange","litchi"];

// for(fruit of fruits) {
//     console.log(fruit);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }

// let heroes = [ ["superman","batman","wonder woman"],
// ["spiderman","ironman","thor"]];

// for(list of heroes) {
//     for(hero of list){
//     console.log(hero);
//     }
// }

// 20. javaScript (part-5)//
//object Literals//
//Creating objects Literals//

// const students = {
//     name:"pawan",
//     age:21,
//     marks:94.4
// };

// const item ={
//    price: 100.99,
//    discount:50,
//    color : ["red","pink"]
// };


// creating a post //
// thread/ Twitter post//

// const post = {
//     username:"@pawankumar",
//     content: "This is my #firstPost",
//     likes:150,
//     reposts:5,
//     tags:["@pawankumar","@delta"]
// };

// conversion in get values //

// const obj = {
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// };


// const student = {
//     name: "pawan",
//     age:21,
//     marks:94.4,
//     city:"delhi"
// };

// Nested Object//

// const classInfo = {
//     Aman:{
//         grade:"A+",
//         city:"Delhi"
//     },
//     Pawan:{
//        grade:"A",
//        city:"Pune" 
//     },
//     karan:{
//         grade:"o",
//         city:"Mumbai"
//     }
// };

// const classInfo =[
//     {
//         name: "Aman",
//         grade:"A+",
//         city:"delhi"
//     },
//     {
//         name:"pawan",
//         grade:"A",
//         city:"puna"
//     },
//     {
//         name:"karan",
//         grade:"0",
//         city:"Mumbai"
//     }
// ];


//Guessing  Game //

// const max = prompt("enter the max number");

// const random = Math.floor(Math.random()*max) + 1;
// let guess = prompt("guess the number");

// while(true) {
//     if(guess == "quit"){
//         console.log("user quit");
//         break;
//     }

//     if(guess == random){
//         console.log("you are right! congrats !! random number was", random);
//         break;
//     }else if(guess < random){
//        guess =  prompt("hint : your guess was too small. please try again")
//     }else{
//         guess = prompt("hint : your guess was too large.please try again");
//     }
   
// }



//javaScript (PART 6)//

// const student = {
//     name:"pawan",
//     age:"23",
//     eng:95,
//     math:93,
//     phy:97,
//     getAvg(){
//         let avg =(this.eng+this.math+this.phy)/3;
//         console.log(avg);
//     }
// }



// function in js //



// function hello() {
//     console.log("hello");
// }
 
// function printName() {
//     console.log("apna collage");
//     console.log("pawan kumar");
// }

// function print1to5() {
//     for(let i=1; i<=5; i++) {
//         console.log(i);
//     }
// }

// function isAdult() {
//     let age=12;
//     if(age>=18){
//         console.log("adult");
//     }else{
//         console.log("not adult");
//     }
// }

// isAdult();

// print1to5();

//  printName() 

    
// practice questions 1 //

// create a function that print a poem ?

// function printPoem() {
//     console.log("twinkel twinkle, little star");
//     console.log("How I wonder what you are");
//     console.log("Up above the world so high");
//     console.log("Like a diamond in the sky.");
// }
//  printPoem();

//practice question 2 //

// Create a function to roll a dice & always display the value of the dice (1to6).

// function rollDice(){
//     let rand = Math.floor (Math.random()*6)+1;
//     console.log(rand);
// }
//  rollDice();
//  rollDice();
//  rollDice();
//  rollDice();

//function with arguments //

// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo("shradha",23);
// printInfo("pawan",21);
// printInfo(14);

// function sum(a,b){
//     console.log(a+b);
// }

// sum(1,2);
// sum(4,5);
// sum(7,8);

//practice question 3 //

// Create a Function that gives us the average of 3 numbers

// function sum (a,b){
//     console.log(a+b);

// }
// function calcAvg(a,b,c){
//     let avg =(a+b+c)/3;
//     console.log(avg);
// }
// calcAvg(2,4,6);

// Prictice Question  4 //

// Create a function that print the multiplication table of a number.

// function printTable(n){
//     for (let i=n; i<=n*10; i+=n) {
//         console.log(i);

//     }
// }
// printTable(2);

// return Keyword //

// function sum(a,b){
//     console.log("hello");
//      console.log("hello");
//     return a+b;
//      console.log("hello2");
//       console.log("hello2");

// }
// function isAdult(age){
//     if(age >=18) {
//        return "adult"; 
//     }else{
//         return "not adult";
//     }
//     console.log("bey bey");
// }


// practice question 5 //

// Create a function that return the sum of numbers from 1 to n.

// function getsum(n){
//     let sum =0;
//     for(let i=1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// practice question 6//

// create a Function that returns the concatenation of all string in an array.

// let str = ["hi","hello","bye","!"];

// function concat(str){
//     let result = "";

//     for(let i=0; i<str.length;i++){
//         result += str[i];
//     }
//     return result;

// }


// scope //
// function scope //

// let sum = 54; //Global Scope

// function calsum (a,b){
//     // let sum = a+b; //Function Scope 
//     console.log(sum);
// }
// calsum(1,2);
// console.log(sum);

// Lexical Scope //

// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {
//         console.log(x);
//         console.log(y);
//     }
//     let x = 5;
//     let y = 6;

//     innerFunc();
// }




// PRACTICE Qs. //

// what will be The output ?

// let greet ="hello";//global scope

// function changeGreet(){
//     let greet ="namaste";//function scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet);//lexical scope

//     }
//     innerGreet ();
// }

// console.log(greet);
// changeGreet();


//functions Expressions//

// let name="pawan";

// let sum=function(a,b){
//     return a+b;   
// }

// let hello=function() {
//     console.log("hello");
// }

//Higher Order Functions //

// function multipleGreet(func,count){// higher order function
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }
// let greet = function(){
//     console.log ("hello");
// }

// multipleGreet(function() {console.log("namaste")}, 1000);

// Heigher Order Functions (Returns) //

// function oddOrEvenFactory(request) {
//     if(request=="odd"){
//        let odd= function(n){
//             console.log(!(n%2 == 0));
//         }
//         return odd;

//     }else if(request == "even"){
//         let even= function(n){
//             console.log(n%2 == 0);
//         }
//         return even;

//     }else{
//         console.log("wrong request");
//     }
// }

// let request ="odd"; //even


//Return Function//


// function oddOrEvenFactory(request) {
//     if(request=="odd"){
//        return function(n){
//             console.log(!(n%2 == 0));
//         }
        

//     }else if(request == "even"){
//         return function(n){
//             console.log(n%2 == 0);
//         }
       
        
//     }else{
//         console.log("wrong request");
//     }
// }

// let request ="odd"; //even

// Method //

// const calculator ={
//      num:  55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b) {
//         return a-b;
//     },
//     mul: function(a,b) {
//         return a+b;

//     }
// };