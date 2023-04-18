

//Ex 3: setTimeout guranted nehe hota he,

//call stack 7s busy
function waitforSevenSeconds() {
    let ms = 7000 + new Date().getTime();
    while (new Date() < ms) {
    }

}

console.log("Start")
console.log("End")

setTimeout(() => {
    console.log('I am from setTimeout')
}, 2000);//call stack empty na takley eta 2s er tekey o late hobey  //call stack busy takley kaj korbey na time nibey
//Timer is not guranted ,depend on call stack,when call stack will be empty then  queue push to call stack then work

waitforSevenSeconds()
console.log("End Two")


/*
Output

start
end
I am from setTimeout
*/



