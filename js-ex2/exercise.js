Array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary'];
Array2 = [21, 19, 12, 'sebastian', 'will', 23, 20];

arrayOfBoth = [['marco', 21], ['antonio', 19], ['luca', 12], ['sebastian', 13], ['leo', 23], ['mary', 20]];
var resultInOrder = Object.fromEntries(arrayOfBoth);
console.log(resultInOrder);

