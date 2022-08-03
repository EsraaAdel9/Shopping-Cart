import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  name='';
  total=0;
  constructor(private router: ActivatedRoute) { 
    router.queryParams.subscribe(
      params => {this.name = params['name'],this.total = params['total']});
  }

  ngOnInit(): void {

  }

}
