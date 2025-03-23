// its used to define struction that a fuunction or class accpets and returns

function fetchApi(val: any): any {
  /// Always Not recommended keyword ANY
}

function getData<T>(val: T): T {
  return val;
}

getData("check its return type");

interface Bottle {
  brand: string;
  type: number;
}

function getSearchProduct<T>(products: T[]): T {
  /// Do Some Database Operations
  let searchIndex = 3;
  return products[searchIndex];
}

let getMoreSearchProduct = <T>(products: T[]): T[] => {
  // Do Some database operations
  return products;
};
