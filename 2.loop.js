/*
    length
    isArray [alternative instanceof]
    From
    for loop,for in ,for of


    find
    findIndex
    filter
    map
    reduce
    includes
    split

 */


let IndexedArray=['10','Irfan','20','50','60','70','80']

console.log(Array.isArray(IndexedArray))

console.log(IndexedArray.length)

let String='I love Dubai'
console.log(Array.from(String))

//////////////////////////  for loop ///////////////////////////////

// EX : 1

for(var i=0;i<=5;i++){
    console.log(i);
}
console.log(i)

// EX :2
const actors=[

    {name:"Actor 1",payment:100},
    {name:"Actor 2",payment:200},
    {name:"Actor 3",payment:300},

]

for(let i=0;i<actors.length;i++){    //i==index =0---1-2-3
    console.log(actors[i])
}


for(let i=0;i<actors.length;i++){    //i==index =0---1-2-3
    actors[i].payment=actors[i].payment-10;
}
console.log(actors[i])

//////////////////////////  foreach ///////////////////////////////


actors.forEach((actor)=>{
    console.log(actor)

})

actors.forEach((actor)=>{
    actor.payment=actor.payment-10
})
console.log(actors)


//////////////////////////  for of ///////////////////////////////
/*
NOTE : arrays,strings, array of objects, sets, maps,
	   *Object(but have work) =>for in
 */

//**Indexed Array
const numbers=[2,4,5,7,[2,3,4]]
for(const num of numbers){
    console.log(num)
}

//**string
const language='javascript';
for(const char of language){
    console.log(char)
}

//**Array of Objects
for(singleObject of actors){
    console.log(singleObject)
}


for(let actor of actors){
    actor.payment=actor.payment-10

}
console.log(actors)

//**json object

const person={name:"Irfan",city:"DUbai", brand:"Apple"}

for(const [key,value] of Object.entries(person)){
    console.log(key,value)
}

//////////////////////////  for in ///////////////////////////////
console.log("HI")


for(const data in actors){
    console.log(data)
}

// Expected output: true


/*
    obj er moddey diye iterate korey
 */

////////////////////////////////
const myObj={
    name:"Laravel",
    estd:"2014",
    founder:"Tailwor"
}

for(property in myObj){
    console.log(property)
}
//////////////////////////////


/////////////////////////////
/*

Array,String er moddey normally iterate korey
for of er jaigay in diley index number show korbey
 */


//const myArray=[1,2,3,4,5];
// const myString="I Love Javascript";
//
// for (element of myObj){
//     console.log(element)
// }

///////////////////////////