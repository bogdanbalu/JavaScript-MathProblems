// Freelancer Rates
console.log('Freelancer Rates');

// Calculate the day rate given an hourly rate
const chargePerDay = (hourlyRate) => {
    return 8 * hourlyRate;
}

const dayRate = chargePerDay(100);
console.log(`The rate charged per day is: ${dayRate}`);

// Calculate the number of workdays given a fixed budget
const necesaryWorkDays = (budget) => {
    return budget / dayRate;
}

const workDays = necesaryWorkDays(500);
console.log(`Necesary work days is: ${Math.round(workDays)}`);


//Calculate the discounted rate for large projects
const pricePerOneFullMonth = () => {
    return 22 * dayRate * 0.42;
}

const estimateCostPerProject = (workDays) => {
    numberOfMonth = Math.floor(workDays / 22);
    daysIncompleteMonth = workDays % 22;

    priceWiThDiscount = numberOfMonth * pricePerOneFullMonth();
    fullPrice = daysIncompleteMonth * dayRate;
    return priceWiThDiscount + fullPrice;
}

const esitatedCost = estimateCostPerProject(workDays);
console.log(`Testimated cost for a project is: ${esitatedCost}`);