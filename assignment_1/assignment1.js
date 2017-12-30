/*
Exercise #1
Create a variable named "numbers" and assign an empty array to it.
*/
var numbers = new Array()

/*
Exercise #2
Using the loop provided for you below, use the array push method to insert the numbers 1 to 10 into the array.
*/

for(var i=0;i<10;i++){
   var myArray = new Array()
   myArray.push('1');
   myArray.push('2');
   myArray.push('3');
   myArray.push('4');
   myArray.push('5');
   myArray.push('6');
   myArray.push('7');
   myArray.push('8');
   myArray.push('9');
   myArray.push('10');

   console.log(i);
   //use the array push() method here.
}


/*
Exercise #3
Test that you used the array push method correctly by console logging the first item in the array. Console log the last item in the array afterwards.
*/
var i = ["0","1","2","3","4","5","6","7","8","9","10"];
console.log(i[0]);
console.log(i[10]);


/*
Exercise #5
Create an empty object and assign it to the variable car below.
Give the car object a property called "colour" and assign it the value of "black". Test that your code works correctly by outputting the "colour" property to the console. You should see the value "black" printed out.
*/
var car;

var car = {
    colour: 'black'
}
console.log(car.colour);