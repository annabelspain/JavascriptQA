let numTest = 45.324568;
numTest = numTest.toFixed(2);
console.log(numTest);

let stringTest = 'I am the very model of a modern Major general';
let indexOfM = stringTest.indexOf('M');
console.log(indexOfM);

let start = stringTest.indexOf('model');
let end = stringTest.indexOf('Major');
//All the test between model and major 
let subStr = stringTest.substring(start,end);
console.log(subStr);