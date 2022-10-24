/* 
All the ways to copy an array. Utilize Shallow and Deep copy.
*/

import _ from "lodash"
import R from "ramda"

const array = [1, 2, 3, 4, 5];

// Shallow copy using the spred operator (...)
const shallowCopyWithSpredOperator = [...array];
console.log("Shallow copy using the spred operator : " + shallowCopyWithSpredOperator);

// Shallow copy using slice()
const shallowCopyWithSlice = array.slice();
console.log("Shallow copy using slice : " + shallowCopyWithSlice);

// Shallow copy using assign()
const shallowCopyWithAssign = [];
Object.assign(shallowCopyWithAssign, array);
console.log("Shallow copy using assign : " + shallowCopyWithAssign);

// Shallow copy using Array.from()
const shallowCopyWithArrayFrom = Array.from(array);
console.log("Shallow copy using array.from() : " + shallowCopyWithArrayFrom);


const nestedArray = [[1, 2], [3, 4], [5, 6]];

// Deep copy using lodash
const deepCopyWithlodash = _.cloneDeep(nestedArray);
console.log("Shallow copy using lodash : " + deepCopyWithlodash);

// Deep copy using Ramda
const deepCopyWithRamda = R.clone(nestedArray);
console.log("Shallow copy using ramda : " + deepCopyWithRamda);

// Deep copy using custom function
const deepCopyFunction = (inObject) => {
    let outObject, value, key

    if (typeof inObject !== "object" || inObject === null) {
        return inObject
    }

    outObject = Array.isArray(inObject) ? [] : {}

    for (key in inObject) {
        value = inObject[key]
        outObject[key] = deepCopyFunction(value)
    }

    return outObject
}
const deepCopyWithCustomFunction = deepCopyFunction(nestedArray);
console.log("Shallow copy using custom function : " + deepCopyWithCustomFunction);

// Deep copy using JSON.parse/stringify
const object =  {
    name: 'chetan',
    age: 23
};
const deepCopyWithJson = JSON.parse(JSON.stringify(object));
console.log("Shallow copy using JSON.parse/stringify : " + deepCopyWithJson);


// Deep copy using Really Fast Deep Copy (rfdc)
const deepCopyWithRFDC = require('rfdc')() // Returns the deep copy function
deepCopyWithRFDC(object)
console.log("Shallow copy using ramda : " + deepCopyWithRFDC);