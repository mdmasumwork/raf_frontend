import { Component } from '@angular/core';
import { ProductDataService } from 'src/app/core/services/data/product/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productList: any;

  constructor(private productService: ProductDataService) {
  }

  ngOnInit(): void {
    this.productService.getData().subscribe({
      next: value => {
        this.productList = value._embedded.products;
        console.log(this.productList);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
