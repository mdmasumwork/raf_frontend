import { Component } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductDataService } from 'src/app/core/services/data/product/product-data.service';

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
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private productDataService: ProductDataService) {
    this.formGroup = formBuilder.group({
      title: ['', [this.emptyValidator]],
      description: ['', [this.emptyValidator]],
      price: [0, [this.priceValidator]],
      isPremium: ["NO"],
      additionalCharge: [0, [this.additionalChargeValidator]]
    });
    this.categoryField = new FormControl();
  }

  ngOnInit(): void {
    this.isPrimeValueChangeObservable = this.formGroup.controls['isPremium'].valueChanges.subscribe(value => {
      this.formGroup.get('additionalCharge')?.updateValueAndValidity();
      if(value === "YES") {
        this.showAdditionalPriceField = true;
      } else {
        this.showAdditionalPriceField = false
      }
    });
  }
  
  createProductHandler(): void {
    this.formSubmitted = true;
    if(this.formGroup.valid) {
      this.productDataService.postData(this.formGroup.value).subscribe(data => {
        console.log("Product created");
      },
      error => {
        console.log(error);
      });
    } else {
      console.log("Form is not valid")
    }
  }

  ngOnDestroy(){
    if (this.isPrimeValueChangeObservable) {
      
    }
  }

  emptyValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return {'emptyValidator': true};
    } else {
      return null;
    }
  }

  priceValidator(conntrol: FormControl) {
    return conntrol.value < 0 ? {'priceValidator': true} : null;
  }

  additionalChargeValidator(control: FormControl) {
    return (control.root.get('isPremium')?.value === "YES" && control?.value < 0) ? {'additionalChargeValidator': true} : null;
  }
}
