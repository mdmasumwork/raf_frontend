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

  constructor(private http: HttpClient) { }

  getData(): Observable<Product> {
    return this.http.get<Product>("http://localhost:8085/products").pipe(
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
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
