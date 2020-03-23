let deepEqual = function (obj1, obj2) {
    for (i in obj1) {
        if (typeof obj1[i] != typeof obj2[i]) {
            return false
        }
        else if (typeof obj1[i] === 'object') {
            deepEqual (obj1[i], obj2[i])
        }
        else if (obj1[i] != obj2[i]) {
            return false
        }
    }
    return true
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// > true
console.log(deepEqual(obj, {here: 1, object: 2}));
// > false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// > true 