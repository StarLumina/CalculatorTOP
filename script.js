const add = function(...numbers) {
	return numbers.reduce((sum,number)=>sum+number,0)
};

const subtract = function(...numbers) {
	return numbers.reduce((sum,number)=>sum-number,2*numbers[0])
};

const sum = function(numbers) {
	return numbers.reduce((sum,number)=> sum + number,0)
};

const multiply = function(numbers) {
  return numbers.reduce((sum,number)=> sum * number,1)
};

const power = function(number, power) {
	return number ** power
};

const factorial = function(factorial) {
  let result  = 1
  if (factorial==0) return 1
  for (let i=1;i<=factorial;i++){
    result *= i
  }
	return result
};