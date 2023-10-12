import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
