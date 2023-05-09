function sum(i) {
    if (i == 1) { //stopping condition
        return 1;
    }
    return i + sum(i - 1); //calling the function within the function
}
const result = sum(5); ///calling the function. When code is executed it will first start from 5 and then move inside the functi
console.log(result);