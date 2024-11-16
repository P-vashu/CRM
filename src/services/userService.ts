import { _users } from '../_mock';

export const departmentArray = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" }
];

const KEYS = {
  users: "users",
  userId: "userId"
};

export function init() {
  // let users = getAllUsers();
  // data["id"] = generateUserId();
  // users.push(data);
  localStorage.setItem(KEYS.users, JSON.stringify(_users));
}



export function addUser(data: TODO) {
  let users = getAllUsers();
  data["id"] = generateUserId();
  users.push(data);
  localStorage.setItem(KEYS.users, JSON.stringify(users));
}

export function generateUserId() {
  if (localStorage.getItem(KEYS.userId) == null)
    localStorage.setItem(KEYS.userId, "0");
  const eid = localStorage.getItem(KEYS.userId);
  var id = parseInt(eid ? eid : "-1");
  localStorage.setItem(KEYS.userId, (++id).toString());
  return id;
}

export function getAllUsers() {
  if (localStorage.getItem(KEYS.users) === null) {
    localStorage.setItem(KEYS.users, JSON.stringify([]));
  }
  const es = localStorage.getItem(KEYS.users);
  return JSON.parse(es ? es : "");
}


export function getUserById(id: string | number) {
  if (localStorage.getItem(KEYS.users) === null) {
    localStorage.setItem(KEYS.users, JSON.stringify([]));
  }
  const us = localStorage.getItem(KEYS.users);
  const ul = JSON.parse(us ? us : "");
  return ul.find((u: TODO) => u.id === id);
}