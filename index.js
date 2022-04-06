// Write your solution in this file!
const employee = {
    name: "Joey",
    streetAddress: "90 Bedford St."
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmp = { ...employee };
    newEmp[key] = value;
    return newEmp;
}
const employee2 = updateEmployeeWithKeyAndValue(employee, "name", "Ross");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
};
const employee3 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Ross");

function deleteFromEmployeeByKey(employee, key) {
    const newEmp2 = { ...employee };
    delete newEmp2[key];
    return newEmp2;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}