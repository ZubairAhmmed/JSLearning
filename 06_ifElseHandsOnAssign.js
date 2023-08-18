


function evenOrOdd(num) {
    if (num%2==0) {
        console.log(`${num} is even`);
        
    } else {
        console.log(`${num} is odd`);
    }
    
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);

console.log(`-----------------------------step=2----------------------`);
var str = 'javaScript';
if (str>10) {
    console.log(str);
} else {
    console.log(`given string value has lessthan 10 charecters`);
}
console.log(`-----------------------------step=3----------------------`);
if (str.startsWith("java")) {
    console.log(`the given string starts with "java"`);
}