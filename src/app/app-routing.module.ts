import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: 'products', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
