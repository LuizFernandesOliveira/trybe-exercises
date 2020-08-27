const grossSalary = 3500;

let aliquotINSS;
let aliquotIR

//definindo valor de aliquota INSS
if(grossSalary > 5189.82) aliquotINSS = 570.88
else if(grossSalary >= 2594.93) aliquotINSS = grossSalary * 0.11;
else if(grossSalary >= 1556.95) aliquotINSS = grossSalary * 0.09;
else if(grossSalary < 1556.95) aliquotINSS = grossSalary * 0.08;

const salaryMinusINSS = grossSalary - aliquotINSS;

//definindo valor de aliquota IR
if(salaryMinusINSS > 4664.68) aliquotIR = (salaryMinusINSS * 0.275) - 869.36;
if(salaryMinusINSS >= 3751.06) aliquotIR = (salaryMinusINSS * 0.225) - 636.13;
if(salaryMinusINSS >= 2826.66) aliquotIR = (salaryMinusINSS * 0.15) - 354.80;
if(salaryMinusINSS >= 1903.99) aliquotIR = (salaryMinusINSS * 0.075) - 142.80;
if(salaryMinusINSS < 1903.98) aliquotIR = 0;

const SalaryMinusINSSMinusIR = salaryMinusINSS - aliquotIR;

console.log('Your Net Salary is : ', SalaryMinusINSSMinusIR);