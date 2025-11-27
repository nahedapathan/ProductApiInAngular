import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  getAllProduct()
  {
    return this.hc.get('https://dummyjson.com/products');
  }

  getSearchProducts(name:any)
  {
    return this.hc.get(`https://dummyjson.com/products/search?q=${name}`);
  }

  getCategoryProducts(cate:any)
  {
    return this.hc.get(`https://dummyjson.com/products/category/${cate}`);
  }
}
