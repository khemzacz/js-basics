
const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average >= 1 && average <= 59) {
        return 'F';
    } else if (average <= 69) {
        return 'D';
    } else if (average <= 79) {
        return 'C';
    } else if (average <= 89) {
        return 'B';
    } else if (average <= 100) {
        return 'A';
    } else {
        return undefined;
    }
}

function calculateAverage(array) {
    let sum = 0;
    for (let val of marks) {
        if (!isNaN(parseInt(val))) {
            sum += val;
        }
    }

    let average = sum;
    if (Array.isArray(marks)) {
        average = average / marks.length;
    } 
    return average;
}