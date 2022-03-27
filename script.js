//CONSTANTS.
const numbers = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const plusButton = document.querySelector(".sum");
const equalButton = document.querySelector(".equal");
const multiButton = document.querySelector(".multi");
const minusButton = document.querySelector(".minus");
const divideButton = document.querySelector(".divide");
const dotButton=document.querySelector(".dot");
const clearButton=document.querySelector(".clear");
const deleteButton=document.querySelector(".delete");



//VARIABLES.
let displayValue = [];
let secondDV = [];
let fullNumber=0;
let secondNumber=0;
let waitingForSecondOperand=false;
let additionResult=0;
let plusButtonOn=false;
let multiButtonOn=false;
let minusButtonOn=false;
let divideButtonOn=false;



//a function that handels addition in the calculator.
//========================================================================================
function add(a,b){
 return parseFloat(a)+parseFloat(b);
}
//a function that handels multiplication in the calculator.
//========================================================================================
function multiply(a,b){
 return a*b;
   
}
//a function that handels subtraction in the calculator.
//========================================================================================
function subtract(a,b){
    return a-b;
}

//a function that handels division in the calculator.
//========================================================================================
function divide(a,b){
    return (a/b);
}


displayNumber1();

//the logic of pressing an operator button and 
//displaying the end result in the display item.
//========================================================================================

plusButton.addEventListener("click",()=>{
    plusButtonOn=true;
    multiButtonOn=false;
    minusButtonOn=false;
    divideButtonOn=false;
    waitingForSecondOperand=true;

   
  
});
multiButton.addEventListener("click",()=>{
    plusButtonOn=false;
    multiButtonOn=true;
    minusButtonOn=false;
    divideButtonOn=false;
    waitingForSecondOperand=true;

   
  
});
minusButton.addEventListener("click",()=>{
    plusButtonOn=false;
    multiButtonOn=false;
    minusButtonOn=true;
    divideButtonOn=false;
    waitingForSecondOperand=true;

   
  
});
divideButton.addEventListener("click",()=>{
    plusButtonOn=false;
    multiButtonOn=false;
    minusButtonOn=false;
    divideButtonOn=true;
    waitingForSecondOperand=true;

   
  
});





equalButton.addEventListener("click",()=>{

    waitingForSecondOperand=false;
    if(plusButtonOn===true){

       fullNumber= display.textContent=operation("+",fullNumber,secondNumber);
        displayValue.splice(0,displayValue.length);
        secondDV.splice(0,secondDV.length);
        secondNumber=0;


        
        
    }else if(multiButtonOn===true){

       fullNumber= display.textContent=operation("*",fullNumber,secondNumber);
        displayValue.splice(0,displayValue.length);
        secondDV.splice(0,secondDV.length);
        secondNumber=0;


        
        
    }else if(minusButtonOn===true){

       fullNumber= display.textContent=operation("-",fullNumber,secondNumber);
        displayValue.splice(0,displayValue.length);
        secondDV.splice(0,secondDV.length);
        secondNumber=0;


        
        
    }else if(divideButtonOn===true){
       fullNumber= display.textContent=operation("/",fullNumber,secondNumber);
        displayValue.splice(0,displayValue.length);
        secondDV.splice(0,secondDV.length);
        secondNumber=0;



        
        
    }
})


//take an operator and two numbers and calls one of the above functions.
//========================================================================================
function operation(operator,num1,num2){
    let plus="+";
    let minus="-";
    let divid="/";
    let multi="*"
    if(operator === plus){
      return add(num1,num2);
    } 
    if(operator === minus){
        return subtract(num1,num2);
    }
    if(operator === multi){
        return multiply(num1,num2);
    }
     if(operator === divid && num2!==0){
        return divide(num1,num2);
    }else{
        return "inf"
    }
   
}




//function that make the numbers work and display what numbers 
//are pressed on the calculators display
//========================================================================================
function displayNumber1(){
    fullNumber=0;
    
        dotButton.addEventListener("click",()=>{
            if((waitingForSecondOperand===false)&&(!displayValue.includes("."))){
        displayValue.push(".")
       display.textContent=`${fullNumber}.`;

    }else if((waitingForSecondOperand===true)&&(!secondDV.includes("."))){
        secondDV.push(".")
       display.textContent=`${secondNumber}.`;        
     }});
        
        
    
     
   
for(let i = 0; i<=numbers.length-1;i++){
    
    numbers[i].addEventListener ("click",function(){
        if(waitingForSecondOperand===false){ 

            

         displayValue.push(i);                 
         fullNumber =+ displayValue.join("");         
         display.textContent=fullNumber;
          return fullNumber;
        
        }else if(waitingForSecondOperand===true)
         { 
          secondDV.push(i);          
          secondNumber =+ secondDV.join("");
          display.textContent=secondNumber;
           return secondNumber;
        }

        
    });
}



}


//the clear and delete buttons logic.
//========================================================================================
clearButton.addEventListener("click",()=>{
    displayValue.splice(0,displayValue.length);
    fullNumber=displayValue.join("");
    secondDV.splice(0,secondDV.length);
    secondNumber=secondDV.join("");
    display.textContent=0;
    waitingForSecondOperand=false;

});

deleteButton.addEventListener("click",()=>{
    if(waitingForSecondOperand===false){
        displayValue.pop();
        fullNumber=displayValue.join("");
        display.textContent=fullNumber;


    }else if (waitingForSecondOperand===true){
        secondDV.pop();
        secondNumber=secondDV.join("");
        display.textContent=secondNumber;
    }
});




    

    

    

