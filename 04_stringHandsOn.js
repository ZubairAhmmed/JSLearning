

function stringHandsOn() {
    console.log(`===========================STEP-1==========================`);
    var str = "     Hey you are doing good, keep it up       ";
    console.log(`Original String: ${str}`)
    console.log(`===========================STEP-2==========================`);
    var originalLenth = str.length;
    console.log(`The length is ${originalLenth}`);
    console.log(`===========================STEP-3==========================`);
    var trimedStr = str.trim();
    console.log(`Trimed string is: ${trimedStr},The trimed length is: ${trimedStr.length}`);
    console.log(`===========================STEP-4==========================`);
    var extraSpacesCount = originalLenth - trimedStr.length;
    console.log(`Number of Extra Spaces Removed: ${extraSpacesCount}`);
    console.log(`===========================STEP-5==========================`);
    var result = trimedStr.charAt(0);
    console.log(`start charecter is ${result},and charecter is ${trimedStr.charAt(33)}`);
    console.log(`===========================STEP-6==========================`);
    var wordAvailble = trimedStr.split(' ');
    console.log(`The words are: ${wordAvailble}`);
    console.log(`===========================STEP-7==========================`);
    var wordGood = str.slice(23,27);
    console.log(`Print the word from given string is: ${wordGood}`);
    console.log(`===========================STEP-8==========================`);
    var startingFrom = str.substring(22,str.length-1);
    console.log(`staring from index 22 for given string : ${startingFrom }` );
    console.log(`===========================STEP-9==========================`);
    var stringEnds = trimedStr.includes("up");
    console.log(`After triming string ends with word is up : ${stringEnds}`);
    console.log(`===========================STEP-10==========================`);
    var stringStarting = trimedStr.includes("Hey");
    console.log(`Before triming string starting with word is Hey: ${stringStarting}`);
}
stringHandsOn()