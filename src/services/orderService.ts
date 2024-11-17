import { _orders, _roles } from '../_mock';

export const roleArray = () => [
  { id: "1", title: 'Sales Leader' },
  { id: "2", title: 'Hr Manager' },
  { id: "3", title: 'Sales Order' },
  { id: "4", title: 'Sales Operator' },
  { id: "5", title: 'Sales Manager' },
  { id: "6", title: 'Project Manager' },
  { id: "7", title: 'Business Analyst' },
  { id: "9", title: 'Product Designer' },
  { id: "10", title: 'Market Manager' },
  { id: "11", title: 'General Manager' }
]


const KEYS = {
  orders: "orders",
  orderId: "orderId"
};

export function init() {
  localStorage.setItem(KEYS.orders, JSON.stringify(_orders));
}


export function addOrder(data: TODO) {
  let orders = getAllOrders();
  data["id"] = generateOrderId();
  orders.push(data);
  localStorage.setItem(KEYS.orders, JSON.stringify(orders));
}

export function updateOrder(data: TODO) {
  let orders = getAllOrders() as TODO;
  let index = orders.findIndex((a: TODO) => a.id === data.id);
  orders[index] = data;
  localStorage.setItem(KEYS.orders, JSON.stringify(orders));
}


export function generateOrderId() {
  if (localStorage.getItem(KEYS.orderId) == null)
    localStorage.setItem(KEYS.orderId, "0");
  const eid = localStorage.getItem(KEYS.orderId);
  var id = parseInt(eid ? eid : "-1");
  localStorage.setItem(KEYS.orderId, (++id).toString());
  return id;
}

export function getAllOrders() {
  if (localStorage.getItem(KEYS.orders) === null) {
    localStorage.setItem(KEYS.orders, JSON.stringify([]));
  }
  const es = localStorage.getItem(KEYS.orders);
  return JSON.parse(es ? es : "");
}


export function getOrderById(id: string | number) {
  if (localStorage.getItem(KEYS.orders) === null) {
    localStorage.setItem(KEYS.orders, JSON.stringify([]));
  }
  const us = localStorage.getItem(KEYS.orders);
  const ul = JSON.parse(us ? us : "");
  return ul.find((u: TODO) => u.id === id);
}

export function deleteItemById(id: string | number) {
  if (localStorage.getItem(KEYS.orders) === null) {
    localStorage.setItem(KEYS.orders, JSON.stringify([]));
  }
  const _orders = localStorage.getItem(KEYS.orders);
  const orders = JSON.parse(_orders ? _orders : "");
  const index = orders.findIndex((u: TODO) => u.id === id);
  orders.splice(index,1)
  localStorage.setItem(KEYS.orders, JSON.stringify(orders));
}


export function getOrdersByPageNumber(
  pageNumber: number, pageSize: number) {
  if (localStorage.getItem(KEYS.orders) === null) {
    localStorage.setItem(KEYS.orders, JSON.stringify([]));
  }
  const es = localStorage.getItem(KEYS.orders);
  const orders = JSON.parse(es ? es : "");

  const size = pageSize > 0 ? pageSize: 10;
  return orders.slice( pageNumber -1, pageSize);
}