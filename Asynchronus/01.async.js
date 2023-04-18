/*

Synchronous : Code Line by Line execute hoi

Asynchronous :
    kisibe code block nehe korey gha,background(Web Apis)e run hobey
complete howar por(Web Apis push korbey Callback Queue Stack e,then Queue check korbey call stack e kono data execute hossey kina,
jodi kono data na takey taholey Queue push korbey call stack)e then callback er data execute hobey

// Asynchronous kaj korey "Event Loop" er maddomey
// Event Loop=>Web Apis er moddey push korey dibey from callstack
// event listener,request ->asynchronous
// click,submit
 */


// Example 1

console.log("Hello")
//Asynchronously Run Hobey in Web API
setTimeout(()=>{console.log('I am from setTimeout')},3000) //3000ms means 3s
console.log("JavaScript")
/*
Output :

Hello
JavaScript
I am from setTimeout  //after 3s
 */

// Example 2
console.log("Hello")
//Asynchronously Run Hobey in Web API
setTimeout(()=>{console.log('I am from setTimeout')},0) //3000ms means 3s
console.log("JavaScript")
/*
/*
Output :

Hello
JavaScript
I am from setTimeout  //after 3s
 */


