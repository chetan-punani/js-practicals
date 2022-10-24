/*
Create an array prototype function which doubles each item of the array. For example
    let arr = [1,2,3,4]
    arr.yourFunction() ---> [2,4,6,8]
*/

Array.prototype.doubleValue = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i] * 2;
    }
}

let arr = [1, 2, 3, 4];
arr.doubleValue();

console.log(arr);