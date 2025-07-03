const display = document.getElementById('display')
let operatorFlag = true
let equation = ''

function updateDisplay(){
    display.textContent = equation
}

function operate(equation){
    let result = 0
    switch (equation){
        case '+':
            result=equation[0]+equation[2]
            break;

        case '-':
            result=equation[0]-equation[2]
            break;
    
        case 'x':
            result=equation[0]*equation[2]
            break;
        case '/':
            result=equation[0]/equation[2]
            break;
    }
    equation.slice(0,3)
    return equation.shift(result)
}
