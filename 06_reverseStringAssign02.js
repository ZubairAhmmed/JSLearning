

function reverseString(string) {
    let reverse = ' ';
    for (let index = string.length-1; index >=0; index--) {
        const char = string.charAt(index);
        if (char!='') {
            reverse = reverse.concat(char);
        }
        
        }
        console.log(reverse);
    
}
reverseString("Hard work always pay back");
reverseString("Soon I will be Angular IT Champ");