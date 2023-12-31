import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, ObservableInput, throwError} from "rxjs";

interface Category {
  name: string;
  detail: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {  

  private option;

  constructor(private http: HttpClient) {
    this.option = {
      withCredentials: true
    }
  }

  getData(): Observable<any> {
    return this.http.get<any>("http://localhost:8085/categories", this.option).pipe(
      catchError(this.handleError)
    );
  } 

  private handleError(error: any, caught: Observable<any>): ObservableInput<any> {
    let errorMessage = "An error occurred!"
    if (error.error instanceof ErrorEvent) {
      errorMessage = "Client side error - " + error.error.message;
    } else {
      errorMessage = "Server side error - " + error.message;
    }
    return throwError(() => new Error(errorMessage));
  }
}
