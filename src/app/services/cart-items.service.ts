import { Injectable } from '@angular/core';
import { item } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  private product: item[] = [];

  constructor() {
  }

  getcard() {

    return this.product;
  }

  additem(cart: item) {
    let index = this.product.findIndex(x => x.id === cart.id);
    if (index < 0) {
      this.product.push(cart);
      return this.product;
    }

    for (let i in this.product) {
      if (this.product[i].id === cart.id) {
        this.product[i].qty += cart.qty;
      }

    }
    return this.product;

  }
  removeItem(product: item) {
    this.product = this.product.filter(item => item !== product);
    return this.product;
  }
}