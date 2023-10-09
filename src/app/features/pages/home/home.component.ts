import { Component } from '@angular/core';
import {CategoryDataService} from "../../../core/services/data/category/category-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  categoryList: any;

  constructor(private categoryDataService: CategoryDataService) {
  }

  ngOnInit(): void {
    this.categoryDataService.getData().subscribe({
      next: value => {
        this.categoryList = value._embedded.categories;
        console.log(this.categoryList);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
