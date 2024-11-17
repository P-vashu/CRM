import { _products, _roles } from '../_mock';


const KEYS = {
  products: "products",
  productId: "productId"
};

export function init() {
  localStorage.setItem(KEYS.products, JSON.stringify(_products));
}



export function addProduct(data: TODO) {
  let products = getAllProducts();
  data["id"] = generateProductId();
  products.push(data);
  localStorage.setItem(KEYS.products, JSON.stringify(products));
}

export function updateProduct(data: TODO) {
  let products = getAllProducts() as TODO;
  let index = products.findIndex((a: TODO) => a.id === data.id);
  products[index] = data;
  localStorage.setItem(KEYS.products, JSON.stringify(products));
}


export function generateProductId() {
  if (localStorage.getItem(KEYS.productId) == null)
    localStorage.setItem(KEYS.productId, "0");
  const eid = localStorage.getItem(KEYS.productId);
  var id = parseInt(eid ? eid : "-1");
  localStorage.setItem(KEYS.productId, (++id).toString());
  return id;
}

export function getAllProducts() {
  if (localStorage.getItem(KEYS.products) === null) {
    localStorage.setItem(KEYS.products, JSON.stringify([]));
  }
  const es = localStorage.getItem(KEYS.products);
  return JSON.parse(es ? es : "");
}


export function getProductById(id: string | number) {
  if (localStorage.getItem(KEYS.products) === null) {
    localStorage.setItem(KEYS.products, JSON.stringify([]));
  }
  const us = localStorage.getItem(KEYS.products);
  const ul = JSON.parse(us ? us : "");
  return ul.find((u: TODO) => u.id === id);
}

export function deleteProductById(id: string | number) {
  if (localStorage.getItem(KEYS.products) === null) {
    localStorage.setItem(KEYS.products, JSON.stringify([]));
  }
  const _products = localStorage.getItem(KEYS.products);
  const products = JSON.parse(_products ? _products : "");
  const index = products.findIndex((u: TODO) => u.id === id);
  products.splice(index,1)
  localStorage.setItem(KEYS.products, JSON.stringify(products));
}


export function getProductsByPageNumber(
  pageNumber: number, pageSize: number = 10 ) {
  if (localStorage.getItem(KEYS.products) === null) {
    localStorage.setItem(KEYS.products, JSON.stringify([]));
  }
  const es = localStorage.getItem(KEYS.products);
  const products = JSON.parse(es ? es : "");

  console.log( ` pageNumber ${pageNumber} `)
  const start = (pageNumber -1)* pageSize;
  const end = start + pageSize
  return products.slice( start, end);
}