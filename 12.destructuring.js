/*
    Object & Array destructring
 */

const user={
    id:100,
    name:"Irfan",
    age:27,
    education:{
        degree:"Masters",
    }
}
/*
//old way
var name=user.name;
console.log(name)
*/
//destructring way



const {name}=user;
console.log(name)

//Nested level
// const {education:{degree}}=user;
// console.log(degree)

//Note : data jodi api tekey asley education value na o taktey parent

const {education:{degree}={}}=user; //undefined dibey ;jodi data na pai but cursh korbey na
console.log(degree)


/*
Array destructring
 */

// EX 1
var numbers=[1,2,3,4,5]
const [a,b]=numbers;
console.log(a,b) //1 2

// EX 2
const [,x,,,y]=numbers;
console.log(x,y) //2 5

// EX 3
var numbers2=[1,2,[3,100,500],4,5]
const [,,[,m,n]]=numbers2;
console.log(m,n) //100 500

// EX 4 SWAP
var x1=2;
var y1=4;

//old way
// var temp=x1;
// x1=y1;
// y1=temp;
// console.log(x1,y1) //4 2
//
//New Way
[y1,x1]=[x1,y1]
console.log(x1,y1) //4 2