
function isPalindrome(str){
    var origStr = str;
    var reversedStr = str.split("").reverse().join("");

    if(origStr === reversedStr){
        return true;
    } else {
        return false;
    }

}

isPalindrome()