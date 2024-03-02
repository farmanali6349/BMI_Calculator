// BMI VALUE & RESULT CALCULATION

// Getting values of form
function calculateBMI(event) {
    event.preventDefault();

    // Converting String Values of Height and Weight into number type
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Getting BMI
    const BMI = getBMI(height, weight);

    // Getting BMI result
    const BMIResult = getBMIResult(BMI);

    // Rendering Result
    showResult(BMI.toFixed(2), BMIResult);

}

// Calculating BMI
function getBMI(height, weight) {

    // converting height(cm) to meter square (m^2)
    const heightInMeterSquare = (height/100) ** 2;

    return weight/heightInMeterSquare;
}

// Calculating BMI Result
function getBMIResult(BMI) {
    if(BMI < 18.6) {
        return 'underweight';
    } else if(BMI >= 18.6 && BMI <= 24.9) {
        return 'normal';
    } else {
        return 'overweight';
    }
}


// RESULT SECTION SHOW/HIDE

function showResult(BMI, BMIResult) {

    // Form & Result Sections
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    document.querySelector('.bmi-value').textContent = BMI;
    document.querySelector('.bmi-result').textContent = BMIResult;

    // Resetting the form fields
    document.querySelector('.form form').reset();

    form.style.display = 'hidden';
    result.style.display = 'block';

}