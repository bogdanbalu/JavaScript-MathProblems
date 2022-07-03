//Vehicle Purchase
console.log('Vehicle Purchase');

const vehicle = 'truck';
const vehicle1 = 'Tesla Model Y';
const vehicle2 = 'Mercedes GLE Coupe';
const vehicleAge = 3;
const vehiclePriceWhenWasNew = 50000;

// Determine if you will need a drivers licence
const needLicense = (kind) => {
    return (kind === 'car' || kind === 'truck') ? true: false
}

const youNeedLicense = needLicense(vehicle);
console.log(`Do you need license for ${vehicle}? ${youNeedLicense}`);

// Choose between two potential vehicles to buy
const chooseVehicle = (vehicle1, vehicle2) => {
    return `${vehicle1} is clearly the better choice.`;
}

const chosenVehicle = chooseVehicle(vehicle1, vehicle2);
console.log(chosenVehicle);

// Calculate an estimation for the price of a used vehicle
const calculateResellPrice = (vehicleAge, vehiclePriceWhenWasNew) => {
    if (vehicleAge < 3) {
        price =  80/100 * vehiclePriceWhenWasNew;
    } else if (vehicleAge > 10) {
        price =   50/100 * vehiclePriceWhenWasNew;
    } else if (vehicleAge >= 3 && vehicleAge < 10) {
        price =   70/100 * vehiclePriceWhenWasNew;
    }
    return price;
}

const vehicleValue = calculateResellPrice(vehicleAge, vehiclePriceWhenWasNew);
console.log(`Price of the vehlcie is: ${vehicleValue}`);