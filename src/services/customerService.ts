export const departmentArray = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" }
];

const KEYS = {
  employees: "employees",
  employeeId: "employeeId"
};


export function addCustomer(data: TODO) {
  let employees = getAllCustomers();
  data["id"] = generateCustomerId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateCustomerId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  const eid = localStorage.getItem(KEYS.employeeId);
  var id = parseInt(eid?eid:"-1");
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllCustomers() {
  if (localStorage.getItem(KEYS.employees) === null) {
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  }
  const es = localStorage.getItem(KEYS.employees);
  return JSON.parse(es?es:"");
}
