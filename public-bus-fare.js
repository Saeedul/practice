function publicBusFare(totalPeople, reservedBusPeople, microbusPeople, farePerPerson) {
    // Calculate the number of people taking the public bus
    const publicBusPeople = totalPeople - reservedBusPeople - microbusPeople;

    // Calculate the total fare for the public bus
    const publicBusFare = publicBusPeople * farePerPerson;

    return publicBusFare;
}

// Define the total number of people
const totalPeople = 65;

// Define the number of people taking the reserved bus and microbus
const reservedBusPeople = 50;
const microbusPeople = 11;

// Define the fare per person for the public bus
const farePerPerson = 250;

// Calculate the total fare for the public bus using the function
const onlyPublicBusFare = publicBusFare(totalPeople, reservedBusPeople, microbusPeople, farePerPerson);

// Display the total fare for the public bus
console.log("Total fare for the public bus: " + onlyPublicBusFare + " taka");
