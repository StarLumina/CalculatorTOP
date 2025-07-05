const display = document.getElementById('display')
const button = document.getElementById('buttons')
const numbers = document.querySelectorAll('button.number')
const symbols = document.querySelectorAll('button.operator')
const clear = document.getElementById('clear')
const del = document.getElementById('delete')
const equal = document.getElementById('operate')
const point = document.getElementById('point')

let operatorFlag = true
let dotFlag = true
let equation = ''

for (const num of numbers){
    num.addEventListener('click', event => {
        equation += event.target.textContent
        updateDisplay()
        operatorFlag = false
    });
}

for (const sym of symbols){
    sym.addEventListener('click', event => {
        if (operatorFlag) equation=equation.slice(0,-3)
        equation += ` ${event.target.textContent} `
        if (operatorFlag&&equation.length==3) equation = ''
        updateDisplay()
        operatorFlag = true
        dotFlag = true
    });
}

equal.addEventListener('click', ()=>{
    let EqArray = equation.split(' ')
    operate(EqArray)
    updateDisplay()
    operatorFlag=true
    dotFlag=true
    equation=''
})

point.addEventListener('click', ()=>{
    if (dotFlag) equation += '.'
    dotFlag = false
    updateDisplay()
})

clear.addEventListener('click', clearE)

function clearE(){
    operatorFlag=true
    dotFlag=true
    equation=''
    updateDisplay()
}

function updateDisplay(){
    display.textContent = equation
}

function operate(equ){
    let result = 0
    switch (equ[1]){
        case '+':
            result= +equ[0]+ +equ[2]
            break;
        case '-':
            result= +equ[0]- +equ[2]
            break;
        case 'x':
            result= +equ[0]* +equ[2]
            break;
        case '/':
            result= +equ[0]/ +equ[2]
            if (equ[2]==0) {
                equation = 'Cannot divide by zero lil bro :P'
                return}
            break;
    }
    equ=equ.slice(3);
    equ.unshift(result)
    equation=result
    if (equ.length==1){
        equation=result
        return 
    } else {
        operate(equ)
    }
}


