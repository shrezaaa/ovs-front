import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { StoreRoutingComponent } from './components/store-routing/store-routing.component';

const routes: Routes = [
  {
    path: '',
    component: StoreRoutingComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: ProductsListComponent },
      // {
      //   path: 'ReTasker',
      //   loadChildren: () =>
      //     import('../re-tasker/re-tasker.module').then((m) => m.ReTaskerModule),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
