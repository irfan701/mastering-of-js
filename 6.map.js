
// Example 1

var numbers=[1,2,3,4,5,6];

const result=numbers.map((item)=>{
    return 2*item;
});
console.log(result);

/*
[ 2, 4, 6, 8, 10, 12 ]
 */


// Example 2

const users=[{fname:"John",lname:"Doe"},{fname:"Jenny",lname:"FK"},]

const finalUsers=users.map((user,index)=>{

    return{
        fullname:`${user.fname} ${user.lname}`

    }

})

console.log(finalUsers)