function gradeCalculator() {
    const totalMarks = document.getElementById('inputTotalMarks').value;
    const yourMarks = document.getElementById('inputYourMarks').value;

    const percentage = (yourMarks / totalMarks) * 100;
    let grade;

    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `You got ${percentage.toFixed(2)}% which is a grade of ${grade}`;
}

