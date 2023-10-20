import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, ObservableInput, throwError} from "rxjs";

interface Product {
  title: string;
  description: string;
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private option;

  constructor(private http: HttpClient) {
    this.option = {
      withCredentials: true
    }
  }

  getData(): Observable<any> {
    return this.http.get<any>("http://localhost:8085/products", this.option).pipe(
      catchError(this.handleError)
    );
  }

  postData(product: Product): Observable<any> {
    return this.http.post("http://localhost:8085/products", product).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any, caught: Observable<any>): ObservableInput<any> {
    let errorMessage = "An error occurred!"
    if (error.error instanceof ErrorEvent) {
      errorMessage = "Client side error - " + error.error.message;
    } else {
      errorMessage = "Backend error - " + error.error;
    }
    return throwError(() => new Error(errorMessage));
  }
}
