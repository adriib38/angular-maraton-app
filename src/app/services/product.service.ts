import { Injectable } from '@angular/core';

import { Product } from '../interface/product';
import { PRODUCTS } from '../mock/mock-products';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product | undefined> {
    const product = PRODUCTS.find(product => product.id === id);
    return of(product);
  }
}
