
console.log(`==============count total number vowels==============`);
function countVowels(string) {
    let count = 0;
    let i = 0;
    while (i < string.length) {
        let char = (string.charAt(i));
        if (char == 'a' || char == 'e' || char == 'e' || char == 'o' || char == 'u'
            || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count=count+1;
    }
    i++;
    
    }
    console.log(`Total number of vowels are: ${count}`);
}
countVowels("I am very good IT Developer");

console.log(`==============sum of cube of numbers==============`);
function sumOfCube() {
    let sum = 0;
    for (let index = 1; index <=5; index++) {
         sum = sum + index * index * index;
        
    }    
    console.log(`The total sum of cube is : ${sum}`);
}
sumOfCube();

console.log(`==============Step-3 in Assignment 1==============`);
function oddPositionChars(str) {
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        
        if (index%2!=0 && char!=' ') {
            console.log(`odd positoned charecter in string is: ${char}`);
        }
        
    }
    console.log(`-----------`);
}
oddPositionChars("Hard work always pay back");
oddPositionChars("Soon I will be Angular IT Champ");