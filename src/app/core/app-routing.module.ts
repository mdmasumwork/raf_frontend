import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../features/pages/home/home.component';
import {CreateProductComponent} from "../features/pages/create-product/create-product.component";
import { LoginComponent } from '../features/pages/login/login.component';
import { ProductListComponent } from '../features/pages/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
