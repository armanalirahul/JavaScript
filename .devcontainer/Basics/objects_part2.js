//const user = new Object() singleton

//non-singleton object
const user = {} 

user.id = "123ajd"
user.name = "arman"
//console.log(user)



const regularUser = {
    email:"arman@gmail.com",
    fullname:{
        userfullname:{
            firstname: "arman",
            lastname:"ali"
        }
    }
}
//console.log(regularUser.fullname.userfullname)



//syntax 1
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}
//const obj4 = {obj1,obj2,obj3}


//syntax 2
//const obj4 = Object.assign({}, obj1,obj2,obj3)
//console.log(obj4);


//syntax 3 
const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);



// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('id'))