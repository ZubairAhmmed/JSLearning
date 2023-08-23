

var array = [10,20,30,50,10,80,20];
console.log(array);
console.log(`type of array is : ${typeof array}`);

console.log(`Total number of array is ${array.length}`);
let element2 = array[2];
console.log(`Element stored at index 2 is ${element2}`);
console.log(`Element stored at index 2 is ${array[0]}`);
let arrayLenght = array.length;
let elementLast = array[arrayLenght-1];
console.log(`Last element is : ${elementLast}`);

console.log(`--------------------------`);
array[1]= 100;
console.log(array);
let is80Available = array.includes(80);
console.log(`is 80 available : ${is80Available}`);
let indexOfElement = array.indexOf(50);
console.log(`index of 50 is: ${indexOfElement}`);


console.log(`--------------Array traversing------------`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
console.log(`--------------------------`);
for (let index = array.length-1; index >=0; index--){
    const element = array[index];
    console.log(element);
}
console.log(`--------------Log even Index Element------------`);
for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        const element = array[index];
        console.log(element);
    }
    
    
}
console.log(`------------------------`);
var array = [10,20,30,50,10,80,20];
array.push[70];
array.unshift[60];
console.log(array);
console.log(`------------------------`);
var array = [10,20,30,50,10,80,20];
array.pop();
array.shift();
console.log(array);

console.log(`Getting the slice from array`);
var array = [10,20,30,50,10,80,20];
console.log(array.slice(3));
console.log(array.slice(1,4));
console.log(`Performing the inser or remove operation `);
var array = [10,20,30,50,10,80,20];
let removedElement = array.splice(4);
console.log(array);
console.log(removedElement);

var array = [10,20,30,50,10,80,20];
let elementRemove = array.splice(4,2);
console.log(array);
console.log(elementRemove);

console.log(`Inserting Array Element using Splice ()`);
var array = [10,20,30,50,10,80,20];
array.splice(3,0,100,200);
console.log(array);