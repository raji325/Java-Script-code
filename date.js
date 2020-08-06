var dt=new Date();
document.write(dt);

var cd=new Date(2019,11,25);
document.write(cd);


//setTimeout Time Delay
setTimeout(function(){
var date=new Date().toLocaleTimeString();
var x=document.getElementById('demo');
x.innerHTML=date;
},5000);

//set interval
setInterval(function()
{
    var date=new Date();
    var x=document.getElementById('demo');
    x.innerHTML=date;
},1000);

//date object methods
var todaysdate=new Date();
document.write('todays date is',todaysdate);
console.log('day',todaysdate.getDay());
console.log('year',todaysdate.getFullYear());
console.log('date',todaysdate.getDate());
console.log('hours',todaysdate.getHours());