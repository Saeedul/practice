function centimeterToMeter(cm) {
    let m = cm / 100;
    return m;
}

let cm = 120;
let m = centimeterToMeter(cm);
console.log(`${cm} centimeters is equal to ${m} meters.`);