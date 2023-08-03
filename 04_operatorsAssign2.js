


console.log(`=======================Step-1==========================`);
var  greaterNumber = function (n1,n2) {
    var result = n1 > n2? n1:n2;
    console.log(`the greater number is : ${result}`);
    
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`=======================Step-2==========================`);
var isEvenOrOddNum = function (num) {
    var result = num%2==0 ? "Even" : "Odd";
    console.log(`The Given nummber is: ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log(`=======================Step-3==========================`);
var wordLength = function(arg) {
    var value = arg.length;
    var result = value%2==0 ? "Even" : "Odd";
    console.log(`The given value is : ${result} `);
}
wordLength("javaScript");
wordLength("developer");
wordLength("Google");