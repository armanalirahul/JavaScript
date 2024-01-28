const course = {
    coursename: "js in hindi",
    price: "99",
    courseInstructor: "youtube"
}

//get value from object 
//console.log(course.courseInstructor)

//get value from object 2nd way
const {courseInstructor} = course
//console.log(courseInstructor)

//get value from object by value destructured
const {courseInstructor: instructor} = course
console.log(instructor)
