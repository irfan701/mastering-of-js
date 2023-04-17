// Example 1 :

var numbers=[1,2,3,4,5,6,9,10];

var result=numbers.filter((currentValue,index,arr)=>{
    return currentValue>4
})

console.log(result)

/*

[ 5, 6, 9, 10 ]
 */


// Example 2 :


//NOTE : [jodi kono item na sai ,tokon oita ke filter korey bad deye dewa jai] new array return korey  <== True/false

const students=[
    {name:"Studnet 1",marks:45},
    {name:"Studnet 2",marks:60},
    {name:"Studnet 3",marks:35},

]

students.filter((student)=>{
    console.log(student)
})

const failed=students.filter((student)=>{

    return 	student.marks<45; //bool

    // or

    if(student.marks<45){
        return true
    }
    return false;
})

//or
const failed=students.filter((student)=>	student.marks<45);
console.log(failed)