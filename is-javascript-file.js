function isJavaScriptFile(fileName) {
    return fileName.endsWith('.js');
}

// Example usage
let file1 = 'script.js';
let file2 = 'js.png';

console.log(isJavaScriptFile(file1)); // true
console.log(isJavaScriptFile(file2)); // fals