import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { item } from 'src/app/models/cart.model';
import { CartItemsService } from 'src/app/services/cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  model: any = {}
  cartTotal: number = 0;
  productAdded: any = [];

  public product = { cartTotal: 0, fullname: '' };

  /*myform = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    credit: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{16}$")]),
  })*/
  constructor(private cartService: CartItemsService, private router: Router) { }

  ngOnInit(): void {
    this.loadCartItems();

  }

  loadCartItems() {
    this.productAdded = this.cartService.getcard();
    this.change();
    return this.cartTotal
  }

  change() {
    this.cartTotal = 0
    this.productAdded.forEach((element: { qty: number; price: number; }) => {
      this.cartTotal += (element.qty * element.price)
    });
  }

  onSubmit() {
    this.router.navigate(['/confirm'], { queryParams: { name: this.model.fullname, total: this.cartTotal } });
  }

  removeitem(item:any) {
    this.productAdded=this.cartService.removeItem(item)
    this.loadCartItems();
    alert(`remove `+ item.name +` from cart !`);

  }
  
}
