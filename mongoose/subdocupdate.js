const mongoose = require('mongoose');
const { connection } = mongoose;
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true,  useUnifiedTopology: true });

const EmployeeSchema = new mongoose.Schema({email: String});
const DepartmentSchema = new mongoose.Schema({name: String, employees: [EmployeeSchema]});
const CompanySchema = new mongoose.Schema({name: String, departments: [DepartmentSchema]});


const Company = mongoose.model('Company', CompanySchema);
connection.once('connected', async () => {
  try {
    const company = new Company({
      name: 'Lucida',
      departments: [
       {name: 'Security',employees : []},
       {name: 'Engineering', employees : []}],
    });
    
    await company.save();
  } finally {
    await connection.close();
  }});




