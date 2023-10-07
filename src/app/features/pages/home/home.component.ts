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
    this.categoryDataService.getData().subscribe(data => {
      this.categoryList = data._embedded.categories;
      console.log(this.categoryList);
    });
  }
}
