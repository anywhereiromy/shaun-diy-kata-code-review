const { getEmployerRole } = require("../src");
describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    const employeeArray =  [{
      name: 'Satti',
      role: 'Developer'
    }, 
    {
      name: 'Jenny',
      role: 'Sales Associate' 
    }, 
    {
      name: 'Javid',
      role: 'Human Recommended Reading Assistant'
    }];
      expect(getEmployerRole('Satti', employeeArray)).toEqual('Developer');
      expect(getEmployerRole('Jenny', employeeArray)).toEqual('Sales Associate');
      expect(getEmployerRole('Javid', employeeArray)).toEqual('Human Recommended Reading Assistant');
  }); 
});
