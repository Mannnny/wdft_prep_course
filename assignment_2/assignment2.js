// Exercise #1
// Write your solution below

var i = "#";
while (i < "########"){
    console.log(i);
    i = i + "#";
}

/* 
Write your explanation for Exercise #1 here

First of all, I was trying to figure out if the sign # is a variable in javascript. After some research, turns out it is not a variable or a ID in javascript. 
It makes sense to use # sign the same as numbers. 

The resule of this exercise wants something that repeats but has different numbers in there. 
Also, there's a condition in the sharp signs which is they are 1<= # <= 7. To use a loop, it fits with the while syntax. The difference is to replace number with the sign #. 

*/

// Exercise #2
// Write your solution below

function isEven(number) {
    if (number % 2 == 0) {
        console.log("Number is even");
    }
    else {
    console.log("number is odd");
    }
};

isEven("3");

/* 
Write your explanation for Exercise #2 here

The question is make a decision if a number is even or odd, which is two options. Thus, the if/else condition is a better solution. 
To decide if a number is even, the number should be dividable by 2 and get a integer instead of having a remainder. If the remainder equals to 0, that means it is an even number. vice versa. 


*/

