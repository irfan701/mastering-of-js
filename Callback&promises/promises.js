/*
    Old way callback
    Order with callback
    promises is a inbuilt object or class
 */
//To make hof
function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log("Register End")
            resolve()
        },1000)
    })

}
function sendEmail(){
    setTimeout(function () {
        console.log("Email End")
    },5000)
}
function login(){
    setTimeout(function () {
        console.log("Login End")
    },3000)
}
function getUserData(callback){
    setTimeout(function () {
        console.log("Get User Data")
        callback()
    },1000)
}
function displayUserData(){
    setTimeout(function () {
        console.log("User Data Displayed")
    },1000)
}


//Nesting Function Or Callback-Hell
// register(function () {
//     sendEmail(function () {
//         login(function () {
//             getUserData(function () {
//                 displayUserData()
//             })
//
//         })
//
//     })
//
// })


console.log("Other application work!")

register().then(sendEmail).then(login)