// Lucian's Luscious Lasagna
console.log("Lucian's Luscious Lasagna"); 

// Define the expected oven time in minutes
const EXPECTED_MINUTES_IN_OVEN = 40;

// Calculate the remaining oven time in minutes
const remainingMinutesInOven = (remainingTime) => {
  return EXPECTED_MINUTES_IN_OVEN - remainingTime; 
}

const bakingTime = remainingMinutesInOven(20)
console.log(`The time the lasagna stayed in the oven: ${bakingTime} minutes`);

// Calculate the preparation time in minutes
const preparationTimeInMinutes = (numberOfLayers) => {
  return 2 * numberOfLayers;
}

const preparationTime = preparationTimeInMinutes(4);
console.log(`Lasagna preparation time: ${preparationTime} minutes`);

// Calculate the total working time in minutes
const totalTimeInMinutes = (preparationTime, bakingTime) => {
    return preparationTime * bakingTime;
}

const totalTime = totalTimeInMinutes(preparationTime, bakingTime);
console.log(`Toal Time is: ${totalTime} minutes`);