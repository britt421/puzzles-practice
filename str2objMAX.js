
function mapChar(str){
var charMap = {};
var max = 0;
var maxChar = "";

for (let char of str){
    if(charMap[char]){
        charMap[char]++;
    } else {
        charMap[char] = 1;
    }

for (let char in charMap){
    if(charMap[char] > max){
        max = charMap[char];
        maxChar = char;
    }
}
}
return maxChar;
}

mapChar("Hello There!");