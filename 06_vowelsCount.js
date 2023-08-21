

// A E I O U
function vowelsCount(str) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'e' || char == 'o' || char == 'u'
            || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count = count+1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
    
}
vowelsCount("I am very good UI Developer")


// WAP to get  the sum of numbers from 0 to 20
let sum = function () {
    let totalSum = 0;
    for (let index = 1; index <= 20; index++) {
        totalSum = totalSum + index;
        
    }
    console.log(`sum of first 20 numbers is : ${totalSum}`);
}
sum();