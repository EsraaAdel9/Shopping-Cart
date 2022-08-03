import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { item } from 'src/app/models/cart.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() Items!: item;

  @Output() additem = new EventEmitter<number>();
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.Items.qty=1
  }
  onSelected(value: string) {
    this.Items.qty =parseInt(value);
  }
  add(){
    this.additem.emit(this.Items.qty)
  }
click(){
  this.router.navigate(['/detail'],{queryParams:{ob:JSON.stringify(this.Items)}});
}
}
