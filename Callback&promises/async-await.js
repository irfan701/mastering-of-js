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
    return new Promise((resolve,reject)=>{
    setTimeout(function () {
        console.log("Email End")
        resolve()
    },5000)
    })
}
function login(){
    return new Promise((resolve,reject)=>{
    setTimeout(function () {
        console.log("Login End")
        resolve()
    },3000)
    })
}
function getUserData(){
    return new Promise((resolve,reject)=>{
    setTimeout(function () {
        console.log("Get User Data")
        resolve()
    },1000)
    })
}
function displayUserData(){
    return new Promise((resolve,reject)=>{
    setTimeout(function () {
        console.log("User Data Displayed")
        resolve()
    },1000)
    })
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
// VS



// //Order Maintained
// register().then(sendEmail).then(login).then(getUserData).then(displayUserData).catch((err)=>{
//     console.log("Err: "+ err)
// })

//Async -await

async function authenticate() {
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();

}  //this function automatic promise return korey

authenticate().then(()=>{
    console.log("All Set")
});

console.log("Other application work!")