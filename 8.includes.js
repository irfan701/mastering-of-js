

//  Indexof

const admins=[2,1,5]
const user={name:'xyz',id:5}

console.log(admins.indexOf(user.id))  //Ans 2 index return korey
                                        //jodi element array moodey na takey -1 return korbey

const isAdmin=admins.indexOf(user.id)>-1
console.log(isAdmin)  //true or false


// Alternatively

//includes

console.log(admins.includes(user.id))

