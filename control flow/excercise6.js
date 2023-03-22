
const array = [0, null, undefined, '', NaN, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let truthies = 0;
    for (val of array) {
        if (val) {
            truthies++;
        }
    }
    return truthies;
}