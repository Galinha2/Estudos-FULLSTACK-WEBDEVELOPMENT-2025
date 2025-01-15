function bmiCalculator(weight, height) {
    let calculation = weight / height ** 2;
    return calculation;
};

console.log(`Your BMI is ${Math.floor(bmiCalculator(65, 1.8))}.`);
