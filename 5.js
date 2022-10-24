/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
example 
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
*/

function arrayInGroups(arr, size) {
    var results = [];
    while (arr.length) {
        results.push(arr.splice(0, size));
    }
    return results;
}

const result = arrayInGroups(["a", "b", "c", "d", "e", "f"], 3);
console.log(result);