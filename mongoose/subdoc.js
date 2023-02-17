const mongoose = require('mongoose');
const { connection } = mongoose;
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

const EmployeeSchema = new mongoose.Schema({ email: String });
const DepartmentSchema = new mongoose.Schema({ name: String, employees: [EmployeeSchema] });
const CompanySchema = new mongoose.Schema({ name: String, departments: [DepartmentSchema] });


const Company = mongoose.model('Company', CompanySchema);
connection.once('connected', async () => {
  try {
    let company = await Company.findOne({ name: 'Lucida' });
    let engineering = company.departments.find((d) => d.name === 'Engineering');
    engineering.employees.addToSet({ email: 'banu@lucidatechnologies.com' });
    await company.save();
    let {departments} = await Company.findOne({ name: 'Lucida' }).populate('departments.employees');
    console.log(departments);
         console.log(departments[1].name);
         console.log(departments[1].employees);
  } finally {
    await connection.close();
  }
});






