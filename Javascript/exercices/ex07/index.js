function bmiCalculator (weight, height) {
    let calculator = weight / Math.pow (height,2);
    calculator = Math.floor(calculator);
    return calculator;
};

function bmiChecker () {
    if (bmi <= 18.5) {
        return 'Underweight';
    }
    if (bmi <= 25) {
        return 'Normal';
    }
    if (bmi <= 30) {
        return 'Overweight';
    }
    if (bmi <= 35) { 
        return 'Obese';
    }
    if (bmi >= 35) {
        return 'Extremely Obese';
    }
};

let bmi = bmiCalculator(80, 1.71);

console.log(`Your BMI is equal to ${bmi}, wich means you are ${bmiChecker()}`);
