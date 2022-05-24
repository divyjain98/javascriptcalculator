let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
//the target keyword returns the element that got triggered
//leanr about hte arrow function
// If the string represents an expression, eval() evaluates the expression
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('button text is' , buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue =  "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){ 
                screen.value = eval(screenValue);
        }else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}