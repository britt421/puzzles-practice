
function mapChar(str){
var charMap = {};

for (let char of str){
    if(charMap[char]){
        charMap[char]++;
    } else {
        charMap[char] = 1;
    }
}
console.log(charMap)
}

mapChar("Hello There!");