import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {CommonModule} from "@angular/common";
import { CreateProductComponent } from './create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateProductComponent,
    LoginComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
