//naming function
function sample()
{
    alert('this is naming function ');
}
sample();

//naing function with parameters
function add(num1,num2)
{
  //  console.log('sum is',num1+num2);
  var c=num1+num2;
  alert('the sum is',c);
}
add(23,45);

//function expression
var test=function()
{
    alert('this is an example for functional expression')
}
test();

//immediate invoke function
(function()
{
    console.log('hello there');
})
();

//function closure
function outer()
{
    var out="hello iam a outer function";
    document.write(out+ "<br>");

function inner()
{
    var inn="hello iam a inner function";
    document.write(inn+ "<br>");
}
return inner();
}
outer();