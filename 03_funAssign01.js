

function noArguments(){
    console.log('----------------------no argumrnts no parameter--------------');
    console.log('reacts and developers');
    console.log('my tech skills are html, css, javascript, and react');
}
noArguments();
console.log('---------------personal details-----------');
function personlDetails(firstName,lastName,collegeName){
    console.log('first name-',firstName);
    console.log('first name-',lastName);
    console.log('first name-',collegeName);
}
personlDetails('zubair','shaik','KLE Tech');
console.log('-------------function with arh no return (swap)-----------');
function swap(n1,n2){
    console.log('Before Swap=> n1', n1, " n2", n2 );
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap=> n1', n1, " n2", n2 );
}
var n1 = 'virat';
var n2 = 'Anuska';
swap(n1,n2);
var num1 = 1000;
var num2 = 2000;
swap(num1,num2);
console.log('------------------step-3---------------------');
function addThreeValue(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addThreeValue(10.23, 2600, 40);
console.log('Result is ', res);
var res = addThreeValue('Hello','Good','Morning');
console.log('Result is ', res);
console.log('-----------------step-4-----------------------------------------------');
function bankDetails(bankName,accountNum,location,pinCode){
    console.log('Bank Name-', bankName);
    console.log('Account Number-', accountNum);
    console.log('Location-', location);
    console.log('Pin Code-', pinCode);
}
bankDetails('CITI Bank',3456782345,'Pune',431202)
bankDetails('Axis Bank',785672345,'Mumbai',441202)
bankDetails('HDFC Bank',8956782345,'Pune',631202,'opens')