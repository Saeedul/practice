function radianToDegrees(radians) {
    return radians * (180 / Math.PI);
}

// Example usage
let angleInRadians = 1.5;
let angleInDegrees = radianToDegrees(angleInRadians);
console.log(angleInDegrees);  