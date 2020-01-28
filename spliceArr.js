numArr = [10, 20, 30, 40, 50, 60];

function modifyArr(arr){
    // arr.splice(1, 2, 22, 33);
    // arr.splice(1, 0, 55, 66);
    var cutOut = arr.splice(3, 1);
    console.log(cutOut);
    return arr;

}

modifyArr(numArr);