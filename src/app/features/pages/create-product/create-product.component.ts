import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  formGroup: FormGroup;
  categoryField: FormControl;
  
  isPrimeValueChangeObservable: Subscription | null = null;
  showAdditionalPriceField: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      name: [''],
      detail: [''],
      price: [0],
      isPremium: [],
      additionalCharge: [0]
    });
    this.categoryField = new FormControl();
  }

  ngOnInit(): void {
    this.isPrimeValueChangeObservable = this.formGroup.controls['isPremium'].valueChanges.subscribe(value => {
      if(value === "YES") {
        this.showAdditionalPriceField = true;
      } else {
        this.showAdditionalPriceField = false
      }
    });
  }
  
  createProductHandler(): void {

    const productData = this.formGroup.value;

    console.log(productData);
    console.log(this.categoryField.value);
  }

  ngOnDestroy(){
    if (this.isPrimeValueChangeObservable) {
      
    }
  }
}
