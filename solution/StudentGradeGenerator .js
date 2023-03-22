//  This function is defined to generate the student's grade based on their marks. It first prompts the user to enter the student's marks between 0 and 100 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//This function takes a single argument called marks and calculates the corresponding grade based on the value of marks.



function generateStudentGrade() {
  rl.question('Enter student marks (between 0 and 100):', (marks) => {
    const grade = calculateStudentGrade(marks);
    console.log(`Student grade is ${grade}`);
    rl.close();
  });
}

function calculateStudentGrade(marks) {
  if (marks > 79) {
    return 'A';
  } else if (marks >= 60 && marks <= 79) {
    return 'B';
  } else if (marks >= 50 && marks <= 59) {
    return 'C';
  } else if (marks >= 40 && marks <= 49) {
    return 'D';
  } else {
    return 'E';
  }
}
generateStudentGrade();
