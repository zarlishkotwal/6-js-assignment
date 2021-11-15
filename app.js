// alert("hello world");

// cahpter 31 to 34

// Q # 1

//  document.write (new Date());

// Q # 2

// var now  = new Date().toString().slice(4,7);
// document.write (`Current Month: ${now}`);
 
// Q # 3

// var now  = new Date().toString().slice(0,3);
// document.write (`today is : ${now}`);

// Q # 4

// var now  = new Date().toString().slice(0,3);
// if(now =="sun" || now =="sat"){
// alert("it's fun day")
// }else{
//     alert("todat is :"+ "" + now)
// }

// Q# 5

// var now  = new Date().getDate();
// if(now <= 15 ){
//         alert("first fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

// Q#6

// var CurrentDate  = new Date();
// var milliSeconds = CurrentDate.getTime();
// var min = CurrentDate / (1000 * 60*60);
// document.write( CurrentDate + " <br>" + milliSeconds + "<br>" + min);


// Q#7

// var now = new Date().getHours();
// if(now >= 0 && now < 12 ){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }
// console.log(now);  

// Q#8

// var laterDate = new Date("December , 31 2020");
// document.write(laterDate);

// Q#9

// var ramzanDate = new Date("June 18 ,2015");
// var now = new Date();
// var miliram = ramzanDate.getTime();
// var nowmili = now.getTime();
// var differ =  nowmili - miliram;
// var totalDays = differ / (1000*60*60*24);
// totalDays = Math.floor(totalDays);
// document.write(`${totalDays} days have passed since 1st Ramzan, 2015`);

// Q#10

// var now = new Date("Dec 1 , 2015");
// var nowmili = now.getTime();
// var dated = new Date("Dec 25 ,2015").getTime();
// var differ = dated  - nowmili  
// var totalSec = differ / (1000);
// totalSec = Math.floor(totalSec);
// document.write(`on reference Date ${now} <br> ${totalSec} seconds had passed since beginning of 2015 `);


// Q#11

// var now = new Date();
// var oneHours = now.setHours();
// document.write(now) ;   
// document.write(oneHours) ;

// Q#12

// var now = new Date()
// var year = new Date()
// year.setFullYear(1915)
// alert(`TODAY : ${now} \n 100 years Back : ${year}`);
// console.log(year);

// Q#13

var age = +prompt("Your age ?");
var birthday = new Date().getFullYear();
var ageCalc = birthday - age;
document.write(`your Age is: ${age} <br>
 your birth Year is: ${ageCalc}`);

