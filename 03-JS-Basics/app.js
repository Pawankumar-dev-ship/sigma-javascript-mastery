// conditional statements

// console.log("before my if statement");
// let age= 16;
// if(age>=18){
//     console.log("you can vote");    
//     console.log("you can drive");
// }
//  if(age < 18) {
//     console.log("you cannot vote");
// }

//  console.log("after my if statement");

// let firstName = "pawan";
// if(firstName   == "pawan"){

//     console.log(`welcome ${firstName}`);
// }


//practice questions// taffic ligh system ?

// let color = "green ".trim().toLowerCase(); 

// // Traffic light system
// if (color === "red") {
//   console.log("stop! light color is red");
// } else if (color === "yellow") {
//   console.log("slow down! light color is yellow");
// } else if (color === "green") {
//   console.log("go! light color is green");
// } else {
//   console.log("Invalid light color!");
// }

//lese if statement

// let age = 15;
// if(age>=18){
//     console.log("you can vote"); 
// }else if(age>=18){
//     console.log("you cannot vote");
// }else if (age<18){
//     console.log("you cannot vote2");
// }

// Grading system marks

// let marks = 85;
// if(marks>=80){
//     console.log("A+");
// }else if (marks>=60){
//     console.log("A");
// }else if (marks>=33){
//     console.log("B");
// }else if (marks<33){
//     console.log("f");
// }

//Month//

// let month = "march";
// if(month=="january"){
//     console.log("winter is here");
// }else if (month=="february"){
//     console.log("winter season is coming to an end here");
// }else if (month=="march"){
//     console.log("wether marking is end");
// }else if(month=="april"){
//     console.log("summer is here");
// }else if(month=="july"){
//     console.log("rainy season is here");
// }


//ELSE STATEMENT

// let age =17;
// if(age>=18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }



//PRACTICE QS//


// QS. Create a system to calculate popcorn price based on the size customer asked for:

//     if size is 'XL', price is Rs. 250
//     if size is 'L', price is Rs. 200
//     if size is 'M', price is Rs. 100
//     if size is 'S', price is Rs. 50

// let size = "M";
// if (size==="XL"){
//     console.log("price is  Rs. 250 ");
// }else if(size==="L"){
//     console.log("price is  Rs.200 ");
// }else if(size==="M"){
//     console.log("price is  Rs. 100 ");

// }else if (size==="S"){
//     console.log("price is  Rs. 50");
// }


//NESTED if-else statements//

// let marks =80;
//  if(marks>=33){
//     console.log("pass");
//     if(marks>=80){
//       console.log("grade:0");
//     }else{
//         console.log("grade:A");
//     }
//  }else{
//     console.log("Better Luck next time!");
//  }

// Logical operators//

// let marks = 90;
// if (marks >=33&& marks >=80){
//    console.log("pass");
//    console.log("A+");
// }


// logical NOT ! operators//

// let marks =75;
// if (!(marks<33)){
//    console.log("pass");
//    console.log("A+");
// }

//combind code// 

// let marks=23;
// if((marks>33&&marks<=80)||!false){
//    console.log("pass");//pass
// }


// Practice questions //

// Qs.  A "good string" is a string that starts with the letter 'a' & has a lenngth>3.write a program to find if a string is good or not.

// Qs  Predict the output of following code:

// let num = 12;
// if((num%3===0)&&( (num+1==15)||(num-1==11))){
//    console.log("safe");
// }else{
//    console.log("unsafe");
// }

// question 1 :-Answer //

// let str = "apple";
// if((str[0]==='a')&&(str.length>3)) {
//     console.log("Good string");
// } else {
//     console.log("Not a good string");
// }  


// question 2 :-Answer //

// let num = 12;

// if (num % 3 === 0 && (num + 1 === 15 || num - 1 === 11)){
//    console.log("safe");
// } else{
//    console.log("unsafe");
// }

// emty string check value //

// let string = " ";
// if (string){
//    console.log("string is not empty");
// }else{
//    console.log("string is empty");
// }

// let num=-10;
// if (num){
//    console.log("num is not equal to 0");
// }else{
//    console.log("num is equal to 0");
// } 

// switch statement//

// let color ="green";
//  switch(color){
//     case "red":
//         console.log("stop");
//         break;
 
//     case "yellow":
//         console.log("slow down");
//         break;

//     case "green":
//         console.log("go");
//         break;
//         default:
//         console.log("light is broken");
//  }

//  console.log("after switch stt");


// Practice Qs. //

// Qs. Use switch  statement to print the day of the week using a number variable 'day'with values 1 to 7.

//             1 = Monday , 2 = Tuesday & so on


// let day = 12;
//  switch (day){
//     case 1:
//         console.log("Monday");
//     break;
 
//     case 2:
//         console.log("tuesday");
//         break;

//     case 3:
//         console.log("wednesday");
//         break;

//     case 4:
//         console.log("thursday");
//         break;
        
//     case 5:
//         console.log("friday");
//         break;
        
//     case 6:
//         console.log("saturday");
//         break;

//     case 7:
//         console.log("sunday, fun day");
//         break;
//     default:
//         console.log("wrong day");
//  }


// ALERT & PROMPT //

// alert("somthing is wrong!");
// let FirstName=prompt("enter your name:");
//     console.log(FirstName);
// console.log("this is a simple log");
//  console.error("this is an error msg");
//   console.warn("this is a warning msg");

// let firstName=prompt("enter first name");
// let lastName=prompt("enter  last name");
// // console.log("welcome", firstName,"",lastName,"!");
// let msg ="welcome "+firstName+" "+lastName+"!";
// alert(msg);





// 20. JavaScript(part 3) //


//String Methods //

// let msg = "     he  llo   ";

// let password = prompt("set your password");
// let newPass=password.trim();
//     console.log(password);


// let name = "pawan kumar";
// let msg = "error";

// console.log(msg.toUpperCase());
 
// let msg="ILoveCoding";

//Method chaining//

// let msg = "    hello    ";
// let newMsg = msg.trim();
// console.log("after trim:",newMsg);
// newMsg =newMsg.toUpperCase();
// console.log("after upper case:",newMsg);

//  method 2

// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);


//SLICE METHOD//

// let msg ="pawan kumar";
// // console.log(msg.slice(5));
// console.log(msg.slice(-3));//11-3=>8

//Replace method//

// let msg = "I loveCoding";
// let fruit ="apple";