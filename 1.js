/*
Given a string containing just the characters '(' and ')', find the whether the expression is valid or not.
	example	
	let a = "()()" ---> valid
	let a = "(())" ---> valid
	let a = ")()" ---> invalid.
*/

const funValidatingString = (str) => {
    const array = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            array.push(str[i]);
        } else if(str[i] === ')' && str.length != 0 && array[array.length -1] === '(') {
            array.pop();
        } else {
            return false;
        }
    }

    return array.length === 0;
}

let value = "()()";
const validateString = funValidatingString(value)
console.log("The String " + value + " is " + validateString);

