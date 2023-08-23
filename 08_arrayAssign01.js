

const arrayFruits = ["Banana", "Orange", "Apple","Mango","Water Melon"];
console.log(`===================console first and last element=========`);
console.log(`The first elsment of array is: "${arrayFruits[0]}",last element is : "${arrayFruits[arrayFruits.length-1]}"`);
console.log(`===================Add element "Papaya" before element "Banana"=========`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`===================Remove "Mango" from the Array=========`);
arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(`===================Insert "Pineapple" in the Array=========`);
arrayFruits.push['Pineaple'];
console.log(arrayFruits);
console.log(`===================Insert "Dragon Fruit" in the Array before "Water Melon"=========`);
arrayFruits.splice(4,0,'Dragon Fruit');
console.log(arrayFruits);
console.log(`===================Replace an element "Orange" with "Kiwi"=========`);
arrayFruits.splice(2,1,'Kiwi');
console.log(arrayFruits);
console.log(`================log the element starting from index 1 to 4=========`);
for (let index = 0; index < arrayFruits.length-1; index++) {
    const element = arrayFruits[index];
    console.log(element);
}
console.log(`================log the last 3 elements=========`);

console.log(arrayFruits.slice(arrayFruits.length-3));