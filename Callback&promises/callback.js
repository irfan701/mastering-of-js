/*
    Old way callback
    Order with callback
 */
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
function login(callback){
    setTimeout(function () {
        console.log("Login End")
        callback()
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
register(function () {
    sendEmail(function () {
        login(function () {
            getUserData(function () {
                displayUserData()
            })

        })

    })

})


console.log("Other application work!")