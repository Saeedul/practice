function findPositiveNumbers(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            break;
        }
        positiveNumbers.push(numbers[i]);
    }
    return positiveNumbers;
}

let array = [45, 87, 96, 11, 63, -56, 71, 28];
let positiveNumbers = findPositiveNumbers(array);
console.log(positiveNumbers);  