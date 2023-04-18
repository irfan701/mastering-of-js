
//To make hof
function register(callback){
    setTimeout(function () {
    console.log("Register End")
        callback()
    },2000)
}
function sendEmail(callback){
    setTimeout(function () {
        console.log("Email End")
        callback()
    },2000)
}
function login(){
    setTimeout(function () {
        console.log("Login End")
    },3000)
}
function getUserData(){
    setTimeout(function () {
        console.log("Get User Data")
    },1000)
}
function displayUserData(){
    setTimeout(function () {
        console.log("User Data Displayed")
    },1000)
}

register(function () {
    sendEmail(function () {
        login()
        getUserData()
        displayUserData()
    })

})


console.log("Other application work!")