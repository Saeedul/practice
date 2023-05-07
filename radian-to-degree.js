function radianToDegrees(radians) {
    let degrees = radians * (180 / Math.PI);
    return degrees.toFixed(2);
}

// Example usage
let angleInRadians = 10;
let angleInDegrees = radianToDegrees(angleInRadians);
console.log(angleInDegrees);