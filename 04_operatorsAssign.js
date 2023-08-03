
console.log(`========================Step-1========================`);
function squareOfWordLength(arg){
    var wordLenth = arg.split(" ").length;
    var result = wordLenth * wordLenth;
    var charLength = arg.length;
    var res = charLength * charLength;
    console.log(`the lenth of word is: ${wordLenth} and it's squree is ${result}`);
    console.log(`The total Charecters are : ${charLength} and it's square is : ${res}`);
}
squareOfWordLength("javaScript");
squareOfWordLength("Google chrome");
squareOfWordLength("Developer Smart");

console.log(`========================Step-2========================`);
var angulaara = function () {
    var str = 'I am Angular Developer';
    var strLength = str.length;
    var wordLenth = str.split(" ").length;
    var result = strLength / wordLenth;
    console.log(`The resulat after deviding is : ${result}`);
    console.log(`The resulat after multiplying is : ${strLength*wordLenth}`);
    
}
angulaara();