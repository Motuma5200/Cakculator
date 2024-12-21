const screen = document.getElementById('screen');
const k7 = document.getElementById('input7');
const k8 = document.getElementById('input8');
const k9 = document.getElementById('input9');
const kdel = document.getElementById('inputDel');
const k4 = document.getElementById('input4');
const k5 = document.getElementById('input5');
const k6 = document.getElementById('input6');
const kplus = document.getElementById('inputPlus');
const k1 = document.getElementById('input1');
const k2 = document.getElementById('input2');
const k3 = document.getElementById('input3');
const kminus = document.getElementById('inputMinus');
const kdot = document.getElementById('inputDot');
const k0 = document.getElementById('input0');
const kdevide = document.getElementById('inputDivide');
const kfactor = document.getElementById('inputFactor');
const kreset = document.getElementById('inputReset');
const kequal = document.getElementById('inputEqual');
const operator = "+-/*";
let lastChar =  '';
let lastIndex = '';


k7.addEventListener('click', function(){
   screen.value += '7';
})
k8.addEventListener('click', function(){
    screen.value += '8';
 })
 k9.addEventListener('click', function(){
    screen.value += '9';
 })

 kdel.addEventListener('click', function(){
    let currentValue = screen.value;

    screen.value = currentValue.slice(0, -1);
 })
 k4.addEventListener('click', function(){
    screen.value += '4';
 })
 k5.addEventListener('click', function(){
    screen.value += '5';
 })
 k6.addEventListener('click', function(){
    screen.value += '6';
 })
 kplus.addEventListener('click', function(){
   lastIndex = screen.value.length;
   lastChar = screen.value.charAt(lastIndex-1);
   if(operator.includes(lastChar)){
      let currentValue = screen.value.slice(0, -1); 
      currentValue += '+';
      screen.value = currentValue;
   }
    else
     screen.value += '+';
 })
 k1.addEventListener('click', function(){
    screen.value += '1';
 })
 k2.addEventListener('click', function(){
    screen.value += '2';
 })
 k3.addEventListener('click', function(){
    screen.value += '3';
 })
 kminus.addEventListener('click', function(){
   lastIndex = screen.value.length;
   lastChar = screen.value.charAt(lastIndex-1);
   if(operator.includes(lastChar)){
      let currentValue = screen.value.slice(0, -1); 
      currentValue += '-';
      screen.value = currentValue;
   }
    else
     screen.value += '-';
 })
 kdot.addEventListener('click', function(){
   lastIndex = screen.value.length;
   lastChar = screen.value.charAt(lastIndex-1);
   if(operator.includes(lastChar)){ 

      screen.value += "0.";
   }
    else
     screen.value += '.';
 })
 k0.addEventListener('click', function(){
    screen.value += '0';
 })
 kdevide.addEventListener('click', function(){
   lastIndex = screen.value.length;
   lastChar = screen.value.charAt(lastIndex-1);
   if(operator.includes(lastChar)){
      let currentValue = screen.value.slice(0, -1); 
      currentValue += '/';
      screen.value = currentValue;
   }
    else
     screen.value += '/';
 })
 kfactor.addEventListener('click', function(){
   lastIndex = screen.value.length;
   lastChar = screen.value.charAt(lastIndex-1);
   if(operator.includes(lastChar)){
      let currentValue = screen.value.slice(0, -1); 
      currentValue += '*';
      screen.value = currentValue;
   }
    else
     screen.value += '*';
 })

 kreset.addEventListener('click', function(){
    screen.value ='';
 })

 kequal.addEventListener('click', function(){
   
    const data = screen.value.split('');
    const queue =[];
    let number ='';
    const operators = "+-*/"
 
    data.forEach(function(element){
         if(operators.includes(element)){
            if(number)
            queue.push(parseFloat(number));
            queue.push(element);
            number = '';
         }
         else{
            number += element;
         }
    });

    if(number) queue.push(parseFloat(number));


    
        let Result = '';
    while(queue.length > 1){  
        while(queue.includes('/') && Result !=="error"){
            const operatorIndex = queue.indexOf('/')
            Result = operate(queue[operatorIndex-1], queue[operatorIndex+1], queue[operatorIndex])
            if (Result === "error") break;
            queue.splice(operatorIndex-1, 3, Result);
        }

        if (Result === "error") break;

        while(queue.includes('*') && Result !=="error"){
            const operatorIndex = queue.indexOf('*')
            Result = operate(queue[operatorIndex-1], queue[operatorIndex+1], queue[operatorIndex])
           
            queue.splice(operatorIndex-1, 3, Result);
            
        }

        while(queue.includes('+') && Result !=="error"){
            const operatorIndex = queue.indexOf('+')
            Result = operate(queue[operatorIndex-1], queue[operatorIndex+1], queue[operatorIndex])
          
            queue.splice(operatorIndex-1, 3, Result);
            
        }

        while(queue.includes('-') && Result !=="error"){
            const operatorIndex = queue.indexOf('-')
            Result = operate(queue[operatorIndex-1], queue[operatorIndex+1], queue[operatorIndex])
     
            queue.splice(operatorIndex-1, 3, Result);
            
        }
       
    }

   screen.value = Result.toString();

 });


function operate(fNumber, sNumber, operator){

    switch(operator){
        case '+':
               return fNumber + sNumber;
        
        case '-':
              return fNumber - sNumber;
              
        case '*':
              return fNumber * sNumber;

        case '/': 
                if(sNumber == 0){
                    return "error";
                }
                else{
                    return fNumber / sNumber;
                }
               
    }

}