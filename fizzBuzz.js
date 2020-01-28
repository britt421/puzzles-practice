//For multiples of 3 print "fizz" for multiples of 5 print "buzz"
//and for multiples of both print "fizzbuzz"


function puzzleProblem(){
    for (var i = 0; i < 101; i++){
        if (i%3 === 0 && i%5 === 0){
            console.log("FIZZBUZZ");
        } else if (i%3 === 0){
            console.log("FIZZ");
        } else if (i%5 === 0){
            console.log("BUZZ");
        } else {
            console.log([i]);
        }
    }
}

puzzleProblem();


//================================================================================
//This was my first attempt, I should not have had [] brackets around i
//I also forgot to set the first condition === 0
//And I didn't need to create an array
//================================================================================

// var fizzBuzz = [];
// function puzzleProblem () {
//     for(var i = 0; i <= 100; i++){
//         if([i]%3 && [i]%5){
//             console.log("FIZZBUZZ");
//         } else if ([i]%3 === 0) {
//             console.log("FIZZ");
//         } else if ([i]%5 === 0) {
//             console.log("BUZZ");
//         } else {
//             console.log([i]);
//         }
//     }
// }

