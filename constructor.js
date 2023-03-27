//js er every function itself constructor function

//Constructor Execute with Named Function

function Person(name) {
this.name=name;
}

var obj=new Person("IRFAN")
console.log(obj.name)

//Constructor Not Execute with Arrow Function


var Person=(name)=> {
    this.name=name;
}

var obj=new Person("IRFAN")
console.log(obj.name)
/*
    Person is not a constructor
    Note : Arrow Fun er outter this ja,inner this o same.
    aikane this ta simple outter this ta.
 */