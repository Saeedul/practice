// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    // Convert rate to a decimal and calculate interest
    const interest = principal * (rate / 100) * time;
    // Return the interest amount
    return interest;
}

// Example usage
const principal = 1000;
const rate = 5;
const time = 2;

const interestAmount = calculateSimpleInterest(principal, rate, time);
console.log(`Interest amount: ${interestAmount}`);
