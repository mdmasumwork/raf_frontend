import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Product {
  title: string;
  description: string;
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Product> {
    return this.http.get<Product>("http://localhost:8085/products").pipe()
  }
}
