
function reverseInt(num){
    var numStr = num.toString().split("").reverse().join("");
    var numInt = parseInt(numStr)
    var numSign = Math.sign(num);

    return numInt * numSign;
}

reverseInt(51);