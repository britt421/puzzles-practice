
// function reverseString(str){
// var splitStr = str.split("");
// // console.log(splitStr);
// var reverseArray = splitStr.reverse()
// // console.log(reverseArray);
// var joinArray = reverseArray.join("");
// // console.log(joinArray);
// return joinArray;
// }

function reverseString(str){
    return str.split("").reverse().join("");
}

reverseString("konichiwa");

