
var numbers=[1,2,3,4,5,6,7,8,7];

var result=numbers.findIndex((currentValue,index,arr)=>{
    //return !(currentValue%2);
    return currentValue>6;
})
console.log(result)