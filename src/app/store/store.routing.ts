import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShoppongBasketComponent } from './components/shoppong-basket/shoppong-basket.component';
import { StoreRoutingComponent } from './components/store-routing/store-routing.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: StoreRoutingComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'products', component: ProductsListComponent },
      { path: 'users', component: UsersComponent },
      { path: 'basket', component: ShoppongBasketComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
