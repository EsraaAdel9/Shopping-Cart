import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { item } from 'src/app/models/cart.model';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  
  @Output() additem = new EventEmitter<number>();

  item!:item;
  qty=1;
  constructor(private router: ActivatedRoute,private http:HttpService,private cartService:CartItemsService) {
    router.queryParams.subscribe(
      params => {
        this.item=JSON.parse(params['ob'])
        this.qty=this.item.qty;
    });
    
   }

  ngOnInit(): void {

  }
  onSelected(value: string) {
    this.qty =parseInt(value);
  }
  add(product:item){
    product.qty=this.qty;
    this.cartService.additem(product);
    alert(`added to cart !`);
  }

}
