//The fibonacci sequence is a sequence of numbers in which each number is the sum of the
//two numbers that came before it: 0 1 1 2 3 5 8 13 21 etc...

//This is the solution, I didn't do this and I don't really understand it :(
//Yay! I figured out that n=the position (index) of a fibNum in an array!!
//I'm still not sure how this works as a recursive function, but I'm not going to worry about it!!

function fib(n) {
    if(n<2){
        return n;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

fib(8);

//============================================================================================
//This code creates the fibonacci sequence

function fibNumbers(){
    var fibArray = [1, 1];
    while (fibArray.length < 2){
        var newNum = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
        fibArray.push(newNum);
    }
    
    return fibArray;
}

fibNumbers();