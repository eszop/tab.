var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);  


newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
console.log('warunek jest spełniony');

var x = allNames.push(newName);

console.log(allNames);

}



