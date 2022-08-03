import { Injectable } from '@angular/core';
import { item } from '../models/cart.model';
import { HttpClient } from "@angular/common/http";
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  item!: item[]

  constructor(private http: HttpClient) { }

  loaditem():Observable<item[]> {
    return this.http.get<item[]>('/assets/data.json');    
  }
  
}
