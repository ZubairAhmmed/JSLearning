
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`======Total elements available=======`);
console.log(`Total elements are : ${arrayNumbers.length}`);
console.log(`===================console first and last element=========`);
console.log(`The first elsment of array is: "${arrayNumbers[0]}",last element is : "${arrayNumbers[arrayNumbers.length-1]}"`);
console.log(`===================Log the thirst last element using length property=========`);
console.log(`Third last elemnt is "${arrayNumbers[arrayNumbers.length-3]}"`);
console.log(`===================all even numbers using for in loop and log on console=========`);

for (let index = 0; index < arrayNumbers.length; index++) {
  
    if (index%2==0) {
    const element = arrayNumbers[index];
    
    console.log(element);
    }
    
}

console.log(`===================all odd numbers using for in loop and log on console=========`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2!=0) {
    
    const element = arrayNumbers[index];
    console.log(element);
    }
}
console.log(`=======Find all the even positioned elements from arra	Numbers, sum it and log on console log========`);
let sum = 0;
for (let i = 0; i < arrayNumbers.length; i += 2) {
    if (i % 2 === 0) {
        sum += arrayNumbers[i];
    }
}
console.log(sum);
console.log(`=======Find all the odd positioned elements from array	Numbers, sum it and log on console log========`);
let count = 0;
for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (i % 2 !== 0) {
        count+= arrayNumbers[i];
    }
}
console.log(count);
console.log(`========Find the sum of all elements from array	Numbers, log on console========`);
function sumAllElement() {
    let sum =0;
    for (let index = 0; index < arrayNumbers.length; index++) {
        sum+= arrayNumbers[index];
    }
    console.log(sum);
}
sumAllElement();
console.log(`========Find the numbers which are multiple of 5========`);
function multipleOf5() {
    for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        if (element%5==0) {
            console.log(element);
        }   
    }
}
multipleOf5();
console.log(`========Is number 115 available in array Numbers ========`);
let available = arrayNumbers.includes(115);
console.log(available);
console.log(`========Is number 23 available in array Numbers ========`);
console.log(arrayNumbers.includes(23));
console.log(`====Insert numbers  55, 66 before index 3 and log array on console=====`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(`====Delete 3 elements starting from index 4 and log array Numbers on console=====`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);