//variable hoisting
var name;
console.log(name);
name='hello world';

//variable hoisting ex2

console.log(name);
var name='hello world';
console.log('the person name is'+name);

//function hoisting(using local variables)
hoist();
function hoist()
{
console.log(message);//undefined
var message="javascript is very easy";
console.log(message);//js is very easys
}

