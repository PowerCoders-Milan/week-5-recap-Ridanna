var array1 = ["a", "b", "x", "y", 0 , 1, 2, 3, 5, "f"];
var array2 = [7, 8, 6 , 10, 4, "c", 9, "c", "n", "g", "z"];
var number = 0;
var letter = 0;
function getArray(array) {
    
    array.forEach( function(item) {
        if (typeof item === "number"){
        number +=1 ;
        } else {
        letter += 1;
        }
        });  
console.log("There are " + array.length +" character amd digit in your array.");
console.log("There are " + number +" numbers in your array");
console.log("There are " + letter +" letters in your array");
}
getArray(array1)
getArray(array2)