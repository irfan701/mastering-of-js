const myObj={
    name:"Laravel",
    estd:"2011",
    founder:"Taylor Otwell",
    ranking:1
}

var keys=Object.keys(myObj)
console.log(keys)
//    [ 'name', 'estd', 'founder', 'ranking' ]

var values=Object.values(myObj)
console.log(values)
//[ 'Laravel', '2011', 'Taylor Otwell', 1 ]

var entries=Object.entries(myObj)
console.log(entries)
/*

  [ 'name', 'Laravel' ],
  [ 'estd', '2011' ],
  [ 'founder', 'Taylor Otwell' ],
  [ 'ranking', 1 ]
 */

/*

Object Shorthand



 */

var x=4;
var y=2;
var z=x*y;

const myObj2={
    name:"Laravel",
    estd:"2011",
    founder:"Taylor Otwell",
    ranking:1,
    x,
    y,
    z
}

console.log(myObj2)