const num1 = parseFloat(prompt('Input your first number'))
const num2 = parseFloat(prompt('Input your second number'))
const operator =prompt('Enter your operator(+, -, /, *)');

let result = 0
if(isNaN(num1) || isNaN(num2)){
    alert('Input a number and refresh.')
}else{
    if(operator == '+'){
        result = num1 + num2
    }else if(operator == '-'){
        result = num1 - num2
    }else if(operator == '*'){
        result = num1 * num2
    }else if(operator == '/'){
        result = num1 / num2
    }
    alert(num1 + operator + num2 + '=' + result)
}