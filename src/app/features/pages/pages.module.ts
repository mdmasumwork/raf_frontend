import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {CommonModule} from "@angular/common";
import { CreateProductComponent } from './create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CreateProductComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
