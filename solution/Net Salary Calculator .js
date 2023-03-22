//Challenge 3: Net Salary Calculator (Toy Problem)
const KRA_RATE = 0.3;
const NHIF_RATE = 0.02;
const NSSF_RATE = 0.06;
const PERSONAL_RELIEF = 2400;

function calculateNetSalary(basicSalary, benefits) {
  const taxableIncome = basicSalary + benefits - PERSONAL_RELIEF;
  const payee = calculatePayee(taxableIncome);
  const nhifDeductions = calculateNHIFDeductions(basicSalary);
  const nssfDeductions = calculateNSSFDeductions(basicSalary);
  const grossSalary = basicSalary + benefits;
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
  console.log(`Basic Salary: ${basicSalary}`);
  console.log(`Benefits: ${benefits}`);
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`Payee (Tax): ${payee}`);
  console.log(`NHIF Deductions: ${nhifDeductions}`);
  console.log(`NSSF Deductions: ${nssfDeductions}`);
  console.log(`Net Salary: ${netSalary}`);
}

function calculatePayee(taxableIncome) {
  let payee = 0;
  if (taxableIncome > 24000) {
    payee += (taxableIncome - 24000) * 0.3;
    taxableIncome = 24000;
  }
  if (taxableIncome > 16000) {
    payee += (taxableIncome - 16000) * 0.25;
    taxableIncome = 16000;
  }
  if (taxableIncome > 8000) {
    payee += (taxableIncome - 8000) * 0.2;
    taxableIncome = 8000;
  }
  if (taxableIncome > 0) {
    payee += taxableIncome * 0.1;
  }
  return payee;
}

function calculateNHIFDeductions(basicSalary) {
  return Math.min(1700, basicSalary * NHIF_RATE);
}

function calculateNSSFDeductions(basicSalary) {
  return Math.min(1800, basicSalary * NHIF_RATE)
}
calculateNetSalary(30000, 5000);
