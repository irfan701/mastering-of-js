/*
     reduce  Main array ke change korey na
 */

//Example 1:

var numbers=[1,2,3,4,5,6];
var sum=numbers.reduce((preValue,currentValue,currentIndex,arr)=>{
   return preValue+currentValue;
},0);
console.log(sum)


// Example 2


const movies=[

   {name:"Interestellar",budget:100},
   {name:"Movies",budget:200},
   {name:"Mtrix",budget:300},

]

let total=0;
movies.forEach((movie)=>{
   total+=movie.budget;
})
console.log(total)

//Or

const total=movies.reduce((totalacc,movie)=>{
   totalacc=totalacc+movie.budget
   return totalacc

},0)

console.log(total)
