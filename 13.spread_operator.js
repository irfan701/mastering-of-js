/*
    Array & object Spreading
    Spread :unpacks elements [] {}
    Spread :Elements Copy/Clone Korar jonno
 */

//    Example 1

var numbers = [1, 2, 3, 4]; //Pack Array
var newNumbers = [...numbers, 5, 6, 7]; //unpack =>to new Array
console.log(newNumbers)


//    Example 2 : Mutate And Immutably copy

var a = numbers; //note : numbers ke mutate korley, a o change hoye jabey. a point korey asey number ke
numbers.push(8)
console.log(a) //[ 1, 2, 3, 4 ]

/*
var a=[...numbers]; //exact copy of numbers
numbers.push(8)
console.log(a) //[ 1, 2, 3, 4 ]

 */


//    Example 3 : concat/Merge

const oldNumbers=[1,2,3];
const newNumbers=[4,5,6]
console.log([...oldNumbers,...newNumbers]);

//Compose

const oldNumbers=[1,2,3];
const newNumbers=[4,5,6]
console.log([100,...oldNumbers,...newNumbers,200]);


//String

const channel="HayyatMart"
console.log([...channel])

/*
   object spreading
 */


//Merge 2 Objects (EXAMPLE 1)


var myObj1={
    x:1,
    y:2
}

var myObj2={
    a:1,
    b:2
}
console.log({...myObj1,...myObj2})

//Merge 2 Objects (EXAMPLE 2)

const user={

    name:"Irfan",
    city:"Mumbai"
}

const address={
    street:"main street"
}

const newUser={
    ...user,
    ...address
}
console.log(newUser)


//   clone(shallow clone) object spreading

const order={
    id:1,				//1st label clone korbey
    date:"29/08/2022",
    name:"Irfan",
    items:['1','2']		//2nd label clone korbey na

}
const newOrder={
    ...order,
}

order.items.push('3') //Prove
console.log(newOrder)


