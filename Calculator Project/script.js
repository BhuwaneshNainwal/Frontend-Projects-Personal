const screen = document.getElementById("screen");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const decimal = document.getElementById("decimal");
const cancel = document.getElementById("cancel");


const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const equal = document.getElementById("equal");


one.addEventListener("click", function() {
    screen.innerText += "1";
  });

two.addEventListener("click", function() {
    screen.innerText += "2";
});

three.addEventListener("click", function() {
    screen.innerText += "3";
});


four.addEventListener("click", function() {
    screen.innerText += "4";
});

five.addEventListener("click", function() {
    screen.innerText += "5";
});

six.addEventListener("click", function() {
    screen.innerText += "6";
});

seven.addEventListener("click", function() {
    screen.innerText += "7";
});

eight.addEventListener("click", function() {
    screen.innerText += "8";
});

nine.addEventListener("click", function() {
    screen.innerText += "9";
});

zero.addEventListener("click", function() {
    screen.innerText += "0";
});


decimal.addEventListener("click", function() {
    screen.innerText += ".";
});

cancel.addEventListener("click", function() {
    screen.innerText = "";
});

multiply.addEventListener("click", function() {

    if(screen.innerText.length !== 0 && 
        screen.innerText.charAt(screen.innerText.length - 1) !== '*' &&
        screen.innerText.charAt(screen.innerText.length - 1) !== '/' && 
        screen.innerText.charAt(screen.innerText.length - 1) !== '+' && screen.innerText.charAt(screen.innerText.length - 1) !== '-')

    screen.innerText += "*";
});


divide.addEventListener("click", function() {

    if(screen.innerText.length !== 0 && 
        screen.innerText.charAt(screen.innerText.length - 1) !== '*' &&
        screen.innerText.charAt(screen.innerText.length - 1) !== '/' && 
        screen.innerText.charAt(screen.innerText.length - 1) !== '+' && screen.innerText.charAt(screen.innerText.length - 1) !== '-')

    screen.innerText += "/";
});

plus.addEventListener("click", function() {

    if( 
        screen.innerText.charAt(screen.innerText.length - 1) !== '*' &&
        screen.innerText.charAt(screen.innerText.length - 1) !== '/' && 
        screen.innerText.charAt(screen.innerText.length - 1) !== '+' && screen.innerText.charAt(screen.innerText.length - 1) !== '-')

    screen.innerText += "+";
});

minus.addEventListener("click", function() {

    if(screen.innerText.charAt(screen.innerText.length - 1) !== '*' &&
        screen.innerText.charAt(screen.innerText.length - 1) !== '/' && 
        screen.innerText.charAt(screen.innerText.length - 1) !== '+' && screen.innerText.charAt(screen.innerText.length - 1) !== '-')

    screen.innerText += "-";
});


equal.addEventListener("click", function() {

    let result = null;
    try{
        
        result = eval(screen.innerText);
    }
    catch(error){
        result = "NAN";
        console.log(result);
    }

    screen.innerText = result;
});











