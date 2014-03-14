


//Declare Variables
var numOfPence,
twoPounds,
twoPoundsRemainder,
onePound,
onePoundRemainder,
fiftyPence,
fiftyPenceRemainder,
twentyPence,
twentyPenceRemainder,
tenPence,
tenPenceRemainder,
fivePence,
fivePenceRemainder,
twoPence,
twoPenceRemainder,
onePence,
onePenceRemainder;



function foo()
{

console.log(numOfPence);



numOfPence = document.getElementById("amount").value;
//Turn pence into pound format .... e.g 0.00
numOfPence = numOfPence / 100;

console.log(numOfPence);





//Calculate number of 2 Pounds & the remainder change


//Put amount into 2 to establish how many 2 pounds go into amount
twoPounds = Math.floor(numOfPence/2);

//Calculate the remainder
twoPoundsRemainder = numOfPence % 2;

console.log("$" + twoPounds);

//Output amount to html div
document.getElementById('two').innerHTML = twoPounds;

//Round the remainder to 2 decimal places
twoPoundsRemainder = twoPoundsRemainder.toFixed(2);
console.log(twoPoundsRemainder);








//Calculate number of 1 Pounds & the remainder change
onePound = Math.floor(twoPoundsRemainder/1);
onePoundRemainder = twoPoundsRemainder % 1;

console.log("--------------------");
console.log("$" + onePound);
//Output amount to html div
document.getElementById('one').innerHTML = onePound;

onePoundRemainder = onePoundRemainder.toFixed(2);
console.log(onePoundRemainder);






//Calculate number of 50 pence & the remainder change

fiftyPence = Math.floor(onePoundRemainder/0.5);
fiftyPenceRemainder = onePoundRemainder % 0.5;

console.log("--------------------");
console.log("$" + fiftyPence);
//Output amount to html div
document.getElementById('fifty').innerHTML = fiftyPence;

fiftyPenceRemainder = fiftyPenceRemainder.toFixed(2);
console.log(fiftyPenceRemainder);






//Calculate number of 20 pence & the remainder change

twentyPence = Math.floor(fiftyPenceRemainder/0.2);
twentyPenceRemainder = fiftyPenceRemainder % 0.2;

console.log("--------------------");
console.log("$" + twentyPence);
//Output amount to html div
document.getElementById('twenty').innerHTML = twentyPence;

twentyPenceRemainder = twentyPenceRemainder.toFixed(2);
console.log(twentyPenceRemainder);






//Calculate number of 10 pence & the remainder change

tenPence = Math.floor(twentyPenceRemainder/0.1);
tenPenceRemainder = twentyPenceRemainder % 0.1;

console.log("--------------------");
console.log("$" + tenPence);
//Output amount to html div
document.getElementById('ten').innerHTML = tenPence;

tenPenceRemainder = tenPenceRemainder.toFixed(2);
console.log(tenPenceRemainder);






//Calculate number of 5 pence & the remainder change

fivePence = Math.floor(tenPenceRemainder/0.05);
fivePenceRemainder = tenPenceRemainder % 0.05;

console.log("--------------------");
console.log("$" + fivePence);
//Output amount to html div
document.getElementById('five').innerHTML = fivePence;

fivePenceRemainder = fivePenceRemainder.toFixed(2);
console.log(fivePenceRemainder);





//Calculate number of 2 pence & the remainder change

twoPence = Math.floor(fivePenceRemainder/0.02);
twoPenceRemainder = fivePenceRemainder % 0.02;

console.log("--------------------");
console.log("$" + twoPence);
//Output amount to html div
document.getElementById('twoP').innerHTML = twoPence;

twoPenceRemainder = twoPenceRemainder.toFixed(2);
console.log(twoPenceRemainder);






//Calculate number of 1 pence

onePence = Math.floor(twoPenceRemainder/0.01);
onePenceRemainder = twoPenceRemainder % 0.01;

console.log("--------------------");
console.log("$" + onePence);
//Output amount to html div
document.getElementById('oneP').innerHTML = onePence;


//No remainder as no coins smaller than 1pence

}
