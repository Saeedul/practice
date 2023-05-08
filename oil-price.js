function calculateTotalPrice(quantity, unitPrice) {
    return quantity * unitPrice;
}

// Example usage
let dieselQuantity = 10; // Number of units for diesel
let dieselUnitPrice = 114; // Price per unit for diesel

let petrolQuantity = 20; // Number of units for petrol
let petrolUnitPrice = 130; // Price per unit for petrol

let octaneQuantity = 15; // Number of units for octane
let octaneUnitPrice = 135; // Price per unit for octane

let dieselTotalPrice = calculateTotalPrice(dieselQuantity, dieselUnitPrice);
let petrolTotalPrice = calculateTotalPrice(petrolQuantity, petrolUnitPrice);
let octaneTotalPrice = calculateTotalPrice(octaneQuantity, octaneUnitPrice);

console.log("Diesel Total Price: Tk. " + dieselTotalPrice);
console.log("Petrol Total Price: Tk. " + petrolTotalPrice);
console.log("Octane Total Price: Tk. " + octaneTotalPrice);
