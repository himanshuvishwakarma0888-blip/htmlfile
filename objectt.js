var color = "Blue";


let obj = { id: 1, name: "Lucky", color: "Blue", subject: "DSA" };
let { id, name, ...obj2 } = obj;
console.log(obj2);

let arr1 = ["Apple", 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);

let car = { make: "Toyota", model: "Corolla" };

console.log(Object.keys(car)); 

console.log(Object.values(car)); 

console.log(Object.entries(car)); 

