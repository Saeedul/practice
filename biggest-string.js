function findBiggestString(array) {
    let biggestString = '';

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string' && array[i].length > biggestString.length) {
            biggestString = array[i];
        }
    }

    return biggestString;
}
/
let strings = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];
let result = findBiggestString(strings);
console.log('The biggest string:', result);