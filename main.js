// Function to calculate net salary
function calculateNetSalary() {
   // Getting User Input From The Form
   var salary = document.form.salary.value;

   // Initializing tax as 0 by default
   var tax = 0;

   // Tax Rules As Switch Statement
   switch (true) {
      // 0% Tax if Salary is between (1 - 3000)
      case (salary > 0 && salary <= 3000):
         tax = (0 * salary) / 100;
         break;

      // 2.5% Tax if Salary is between (3001 - 5000)
      case (salary >= 3001 && salary <= 5000):
         tax = (2.5 * salary) / 100;
         break;

      // 5% Tax if Salary is between (5001 - 7000)
      case (salary >= 5001 && salary <= 7000):
         tax = (5 * salary) / 100;
         break;

      // 7.5% Tax if Salary is between (7001 - 10000)
      case (salary >= 7001 && salary <= 10000):
         tax = (7.5 * salary) / 100;
         break;

      // 10% Tax if Salary is more than 10000 but not equal to 10000
      case (salary > 10000):
         tax = (10 * salary) / 100;
         break;
         
      // Default case if the salary entry is wrong 
      default:
         window.alert('Please Enter Valid Number For Salary');
   };

   // Tax Deduction Rules To Acheive The Net Salary
   var netSalary = salary - tax;

   // Resetting Result Header To Blank String
   document.getElementById('result__header').innerText = "";

   // Sending The Obtained Salary To DOM where id is 'salary'
   document.getElementById('salary').innerText = "Your Salary: "+ salary;

   // Sending The Calculated Tax To DOM where id is 'tax'
   document.getElementById('tax').innerText = "Your Tax: " + tax.toFixed(2);

   // Sending The Calculated Net Salary To DOM where id is 'netSalary'
   document.getElementById('netSalary').innerText = "Your Net Salary: " + netSalary.toFixed(2);
}