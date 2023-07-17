function bmiCalculator(wight, height) {
    
    var bmi = Math.round(wight / Math.pow(height, 2));
    return bmi
}

bmiCalculator(65, 1.8)
