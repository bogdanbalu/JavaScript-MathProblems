// Annalyns Infiltration
console.log('Annalyns Infiltration');

const knightIsAwake = false;
const archerIsAwake = false;
const prisonerIsAwake = true;
const petDogIsPresent  = true;

// Check if the 'Fast Attack' action is possible
const canExecuteFastAttack = (knightIsAwake) => {
    return !knightIsAwake ?  true : false;
}

const fastAttack = canExecuteFastAttack(knightIsAwake);
console.log(`You can fast attack? ${fastAttack}`);

// Check if the 'Spy' action is possible
const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
    return (knightIsAwake || archerIsAwake || prisonerIsAwake ) ? true : false
}

const youCanSpy = canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
console.log(`You can spy? ${youCanSpy}`);

// Check if the 'Signal Prisoner' action is possible
const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
    return (!archerIsAwake && prisonerIsAwake) ? true : false
} 

const youCanSignal = canSignalPrisoner(archerIsAwake, prisonerIsAwake);
console.log(`You can signal? ${youCanSignal}`);

// Check if the 'Free Prisoner' action is possible

const canFreePrisoner = (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) => {
    if (petDogIsPresent && !archerIsAwake) {
        return true;
    } else if (!petDogIsPresent) {
        return false;
    } else if (prisonerIsAwake && (!knightIsAwake && !archerIsAwake)) {
        return true;
    } else if (!prisonerIsAwake) {
        return false;
    }
}

const youCanFreePrisoner = canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
console.log(`You can free prisoner? ${youCanFreePrisoner}`);