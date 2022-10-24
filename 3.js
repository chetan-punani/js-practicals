/* 
Create a Calculator with all necessary validations.
*/

const funCalculateNumber = (numOne, numTwo, operation) => {
    let result = 0;
    if ((0 <= numOne <= 9) && (0 <= numTwo <= 9)) {
        if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
            switch (operation) {
                case '+':
                    result = numOne + numTwo;
                    break;
                case '-':
                    if (numOne > numTwo) {
                        result = numOne - numTwo;
                    } else if (numTwo > numOne) {
                        result = numTwo - numOne;
                    }
                    break;
                case '*':
                    result = numOne * numTwo;
                    break;
                case '/':
                    if (numTwo !== 0) {
                        result = numOne / numTwo;
                    }
                    break;
            }
        }
    }

    return result;
}

let numberOne = 5;
let numberTwo = 5;
let operation = '+';
const answer = funCalculateNumber(numberOne, numberTwo, operation)
console.log("The Answer : " + answer);