import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Category {
  name: string;
  detail: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>("http://localhost:8085/categories");
  }
}
