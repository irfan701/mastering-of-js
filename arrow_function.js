
//##### Named Function ######

function number(){
   return Date.now()
}
console.log(number());

//##### Arrow Function #####

let numberOne=()=>{
    return Date.now()
}
//console.log(numberOne());


//##### inline Arrow Function ##### [if u have  just one statement]

//let numberTwo=()=> Date.now();
//console.log(numberTwo())

// let numberTwo=()=>console.log("Hello World");
// //numberTwo()
//
// let number3= a =>a*a;
// //console.log(number3(10))
//
// let number4=(a,b)=>a+b;
// console.log(number4(10,30))



//##### self executing function #####

(()=>{
    return new Date();
})()

(()=>console.log(new Date))();

//Constructor function

