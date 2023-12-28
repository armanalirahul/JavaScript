//All array concept is same in js as like java the only difference is in js that array is a different type of dataStructure and some imp method also in this for using you can explore it

const array = [1,2,3,4,"a"]
//console.log(array)


//array join 

//const newArray = array.join()
//console.log(newArray)

//slice and splice 

console.log("A ", array)

const myarr1 =  array.slice(1,3) // first is include and last is not include so there is get element from index 1 and 2 last is not include
console.log(myarr1)

console.log("B ", array)

const myar2 = array.splice(1,3)// splice operation get the index 1 to 3 from array and rest element is left in the original array and splice manipulate the original array
console.log(myar2);

console.log("C ", array);
