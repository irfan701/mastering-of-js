/*
    rest operator
    Rest:packs elements  ; use function er moddey
 */

//  Ex:1
function  myFun(...params) {
    console.log(params)
}

myFun(5,6,7,8,9)
//[ 5, 6, 7, 8, 9 ]


//  Ex:2
function  myFun2(a,...params) {
    console.log(params)
}

myFun2(5,6,7,8,9)
 //   [ 6, 7, 8, 9 ]




function sum(num1,num2){
    return num1+num2
}
console.log(sum(3,4))
//Note: Amon kico situation asvey ,koita parameters asvey ,seta amader ojana


function sum(...numbers){
    console.log(numbers)
    let result=0;
    for(let num of numbers){
        result+=num
    }
    return result;
}

//console.log(sum(3,4,5,6,7,8))

const numbers=[3,4,5,6,7] //spread unpack

console.log(sum(...numbers))

//&&&
function sum(num1,num2,...numbers){
    console.log(numbers)
    let result=0;
    for(let num of numbers){
        result+=num
    }
    return result;
}

console.log(sum(3,4,5))


///&&&

const numbersFromBackend=[2,4,5,6,7,3,5]
console.log(Math.max(...numbersFromBackend))

//&&& Destructuring

const user={
    name:"Irfan",
    city:"Chittagong",
    street:"Main Street"
}

const {name,...address}=user
console.log(name)
console.log(address) //obj