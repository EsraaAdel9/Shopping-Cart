import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/models/cart.model';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList!: item[]
  cartList: any = []
  constructor(private httpService: HttpService, private cartService: CartItemsService) { }

  ngOnInit(): void {
    this.getItems();
  }
  getItems() {
    this.httpService.loaditem().subscribe((products) => {
      this.productList = products;
    })
  }

  addproduct(product: item, qty: number) {
    product.qty = qty;
    this.cartService.additem(product);
    alert(`added to cart !`);
  }
}
