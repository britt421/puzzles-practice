//Problem #1: printReverse()

function printReverse(arr){
    for(var i = (arr.length -1); i >= 0; i--){
        console.log(arr[i]);
    }
}

//**************** Rewritten using forEach instead of a For Loop ***************//
//Wait...can I write this one with a forEach????

function printReverse(arr){
    for(var i = (arr.length -1); i >= 0; i--){
        console.log(arr[i]);
    }
}


//Problem #2: isUniform()
var testArray = ["bunny", "bunny", "bunny"];

function isUniform(arr){
    var firstItem = arr[0];

    for(var i = 1; i < arr.length; i++){
        if (firstItem !== arr[i]){
            return false;
        }
    }
    return true;
}

isUniform(testArray);

//**************** Rewritten using forEach instead of a For Loop ***************//
//I didn't get this one to work...which is weird b/c his sister up there works...hmmm...
//Tired and going to bed!!

var testArray = ["bunny", "bunny", "bunny"];

function isUniform(arr){
    var firstItem = arr[0];

    arr.forEach(function(element){
        console.log(element)
        if (firstItem !== element){
            return false;
        }
    })
    return true;
}

isUniform(testArray);

//Problem #3: sumArray()

function sumArray(arr){
    var sumTotal = 0;
    for(var i = 0; i < arr.length; i++){
        sumTotal += (arr[i]);
    }
    console.log(sumTotal);
}

//**************** Rewritten using forEach instead of a For Loop ***************//

function sumArray(arr){
    var sumTotal = 0;
    arr.forEach(function(element){
        sumTotal += element;
    })
    console.log(sumTotal);
}
    




//Problem #4: max()

function max(arr){
    var maxNum = 0;
    for(var i = 0; i < arr.length; i++){
        if(maxNum <= arr[i]){
        maxNum = arr[i];
        }
    }
    console.log(maxNum);
}

//**************** Rewritten using forEach instead of a For Loop ***************//

function max(arr){
    var maxNum = 0;
    arr.forEach(function(element){
        if(maxNum <= element){
        maxNum = element;
        }
    })
    console.log(maxNum);
}

