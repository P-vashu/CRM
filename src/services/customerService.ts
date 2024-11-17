import { _customers, _roles } from '../_mock';


const KEYS = {
  customers: "customers",
  customerId: "customerId"
};

export function init() {
  localStorage.setItem(KEYS.customers, JSON.stringify(_customers));
}


export function generateCustomerId() {
  if (localStorage.getItem(KEYS.customerId) == null)
    localStorage.setItem(KEYS.customerId, "0");
  const eid = localStorage.getItem(KEYS.customerId);
  var id = parseInt(eid?eid:"-1");
  localStorage.setItem(KEYS.customerId, (++id).toString());
  return id;
}

export function addCustomer(data: TODO) {
  let customers = getAllCustomers();
  data["id"] = generateCustomerId();
  customers.push(data);
  localStorage.setItem(KEYS.customers, JSON.stringify(customers));
}

export function updateCustomer(data: TODO) {
  let customers = getAllCustomers() as TODO;
  let index = customers.findIndex((a: TODO) => a.id === data.id);
  customers[index] = data;
  localStorage.setItem(KEYS.customers, JSON.stringify(customers));
}

export function getAllCustomers() {
  if (localStorage.getItem(KEYS.customers) === null) {
    localStorage.setItem(KEYS.customers, JSON.stringify([]));
  }
  const es = localStorage.getItem(KEYS.customers);
  return JSON.parse(es ? es : "");
}

export function getCustomerById(id: string | number) {
  if (localStorage.getItem(KEYS.customers) === null) {
    localStorage.setItem(KEYS.customers, JSON.stringify([]));
  }
  const us = localStorage.getItem(KEYS.customers);
  const ul = JSON.parse(us ? us : "");
  return ul.find((u: TODO) => u.id === id);
}

export function deleteItemById(id: string | number) {
  if (localStorage.getItem(KEYS.customers) === null) {
    localStorage.setItem(KEYS.customers, JSON.stringify([]));
  }
  const _customers = localStorage.getItem(KEYS.customers);
  const customers = JSON.parse(_customers ? _customers : "");
  const index = customers.findIndex((u: TODO) => u.id === id);
  customers.splice(index,1)
  localStorage.setItem(KEYS.customers, JSON.stringify(customers));
}


export function getCustomersByPageNumber(
  pageNumber: number, pageSize: number) {
  if (localStorage.getItem(KEYS.customers) === null) {
    localStorage.setItem(KEYS.customers, JSON.stringify([]));
  }
  const es = localStorage.getItem(KEYS.customers);
  const customers = JSON.parse(es ? es : "");

  const size = pageSize > 0 ? pageSize: 10;
  
  return customers.slice( pageNumber -1, pageSize);
}