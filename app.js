const display = document.querySelector ('.display');

let currentOperator= null;
  let currentValue = '';
  let previousValue = ''; 


const numberButtons = document.querySelectorAll('.button.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        currentValue += event.target.innerText
        display.textContent= currentValue;
    });
  });

  //user story 2: As a user I want to be able to add two numbers together.
  // I need to create a handle that runs when a user selects an operator and stores the first number and the operator ex: "+" for the calculation 
  //select all operator buttons that will allow you to perform calculuations
  const operatorButtons = document.querySelectorAll('.button.operator');
  // set up an event listener that captures the operator and stores the current number for the operation.  let currentOperator= null
operatorButtons.forEach(operatorButton => {
 operatorButton.addEventListener('click',(event ) => {
    if ( currentValue==='') return;
    currentOperator= event.target.innerText;
    previousValue= currentValue;
    currentValue = '';
 });
}); 
/// this how the calculator will know which operator is being selected and saves the first number as previousValue
// now I need to be able to select the equals button to perform the calculation
const equalsButton= document.querySelector('.button.equals');
equalsButton.addEventListener('click',(event) => {
    if(!currentOperator || !currentValue || !previousValue) return ;
    let result; 
    const prev = parseFloat (previousValue);
    const current = parseFloat(currentValue);
    if (currentOperator=== '+'){
        result = prev + current;
    } else if( currentOperator === '-'){
        result= prev - current;
    } else if ( currentOperator === '*'){
        result = prev * current
    } else if ( currentOperator === '/') {
        result = prev / current; 
    } else {
        return; }
currentValue= result.toString();
previousValue= '';
currentOperator= null;
display.textContent= result; 
}); 

const clearButton = document.querySelector('.button.clear'); 
clearButton.addEventListener('click', () => {
  currentValue = '';
  previousValue = '';
  currentOperator = null;
  display.textContent = '0';  // Reset display to 0
}); 
