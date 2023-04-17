
/*
slice returns a piece of the array but it doesn't affect the original array.
splice changes the original array by removing, replacing, or adding values and returns the affected values

 */

// var numbers=[1,2,3,4,5]; //offset/index=>0,1,2,3,4
//
// var result=numbers.slice(1,3)
// var result=numbers.slice(-2,4)
// console.log(result);



const names=['john','jane','Shyam','Ram','samer','Mansi']
names.splice(2,2)  //<=indexNumber ,delete
console.log(names)