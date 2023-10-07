import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    NgOptimizedImage
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
