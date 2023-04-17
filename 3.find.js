/*
        Array.prototype.find
 */


// Example 1 :

var numbers=[1,2,3,4,5,6,9,10];
var result=numbers.find(function (currentValue,currentIndex,arr) {
    return currentValue>4; //return korbey true or falsee
});
console.log(result); //5


class Student{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    test(){
        console.log('Hello');
    }
    exampleFun(){
        var array=[1,2,3];
        array.find(function () {
            this.test()
        },this)
    }

    exampleFun2(){
        var array=[1,2,3];
        array.find( ()=> {
            this.test()
        })
    }
}

let obj=new Student("Irfan",'22')
obj.exampleFun2();

/*

https://sayhitosumit.medium.com/the-power-of-asynchronous-programming-in-javascript-e7886e027d0
 */

// Example 2 :

const user=[{name:"ooo"},{name:"john"}]
const data=user.find((item)=>{
    return item.name==='john'
})
console.log(data)