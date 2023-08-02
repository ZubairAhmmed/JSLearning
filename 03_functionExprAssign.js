
console.log(`=========================step-1=======================`);
var multiplication = function(num){
    var result = num * num;
    console.log(`square of numbers is: ${result} `);
}
multiplication(5);
multiplication(6);
multiplication(25);
multiplication(100);
multiplication(67);
multiplication(89);
multiplication(59);
console.log(`=========================step-2=======================`);
console.log(typeof multiplication);
console.log(`=========================step-3=======================`);
var area = function(){
var lenght = 499;
var width = 917;
var rectangleArea =lenght * width;
console.log(`area of rectangle is ${rectangleArea}`);

}
area();
console.log(`=========================step-4=======================`);
var swapValues = function(n1,n2){
    console.log('Before Swap=> n1 =', n1, " n2 =", n2 );
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap=> n1 =', n1, " n2 =", n2 );
}
var num1 = 'Mahi';
var num2 = 'Raina'
swapValues(num1,num2);
var num1 = 55;
var num2= 77;
swapValues(num1,num2);
console.log(`=========================step-5=======================`);
var perform = function(){
    console.log(`=========================step-5(A)=======================`);
    var str = 'JS is the most popular language of internet';
    console.log(`The total charecter available in string is ${str.length}`);
    console.log(`=========================step-5(B)=======================`);
    console.log(`charecter at index 6 is : ${str.charAt(6)}`);
    console.log(`=========================step-5(C)=======================`);
    console.log(`charecter at index 11 is : ${str.charAt(11)}`);
    console.log(`=========================step-5(D)=======================`);
    console.log(`charecter at last is : ${str.charAt(str.length-1)}`);
    console.log(`=========================step-5(E)=======================`);
    console.log(`charecter at first is : ${str.charAt(0)}`);
    console.log(`=========================step-5(F)=======================`);
    console.log(`charecter at last is : ${str.charAt(str.length-3)}`);
    console.log(`=========================step-5(G)=======================`);
    var countWords = str.split(' ').length;
    var result = countWords * countWords;
    console.log(`The square of total no. of words in given string is : ${result}`);

}
perform();