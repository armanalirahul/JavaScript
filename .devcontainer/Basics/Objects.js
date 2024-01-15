//Singleton
//Object.create


//object literals

const mySum = Symbol("Key6")

const JsUser = {
    name: "Arman",  //key value pair - key is by default String like this - name 
    "full name": "Arman Ali",
    [mySum]: "key1", // use of symbol key
    age: 18,
    location: "Jaipur",
    email: "arman.ali@tcs.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySum])

JsUser.email = "armanali@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "armanali@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Arman Ali")
    console.log(`Hello Arman Ali, ${this.name}`) //for access property
}

console.log(JsUser.greeting())