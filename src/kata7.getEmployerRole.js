const getEmployerRole = (employeeName, employees) => {
    let newObject =  employees.filter((element) => element.name === employeeName);
    return newObject[0].role;
};
module.exports = getEmployerRole;
