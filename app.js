// if (event.value==='+'){
    //     addition();
    // }else if (event.value==='/'){
    //     division;
    // }else if (event.value==='-'){
    //     subtraction;
    // }else if (event.value==='*'){
    //     multiplication;
    // }else if (event.value==='='){
    //     equals;
    // }else{
    //     myhistory.push(Number(event.value));    
    //     numbers += event.value;
    //     display(numbers); 
    // }   

var numbers = "";
var myhistory = [];
var operator = "";
var number1 = "";
var number2= "";

function numerics(event) {
    if (event.value==='+'){

            operator.length<1 ? (operator += event.value) && (clear()): null;
        }else if (event.value==='/'){
            operator.length<1 ? (operator += event.value) && (clear()): null;
        }else if (event.value==='-'){
            operator.length<1 ? (operator += event.value) && (clear()): null;
        }else if (event.value==='*'){
            operator.length<1 ? (operator += event.value) && (clear()): null;
        }else if (event.value==='='){
            operator.length<1 ? numbers="Error" && display(numbers): answer();
        }else{
            if (operator.length<1){
                numbers += event.value;
                display(numbers);
            }else{
                numbers += event.value;
                display(numbers);
            }
    //     ? operator.length<1? numbers += event.value;
    // display(numbers);}
}
}
function display(x) {
    document.querySelector(".values").textContent = x;
}

function clear() {
    number1 += numbers;
    numbers="";
    document.querySelector(".values").textContent = "";
}

function answer() {
    number2 += numbers;
    numbers="";
    var myAnswer;
    if (operator === '+') {
        myAnswer = Number(number1) + Number(number2);

    }if (operator === '*') {
        myAnswer = Number(number1) * Number(number2)
        
    }if (operator === '/') {
        myAnswer = Number(number1) / Number(number2)
        
    }if (operator === '-') {
        myAnswer = Number(number1) - Number(number2)
        
    }
    displayAnswer(myAnswer);
}

function displayAnswer(y){
    document.querySelector(".values").textContent= y;
    number2="";
    number1="";
    operator="";
}

