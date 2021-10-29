import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingComponent } from './components/products-routing/products-routing.component';
import { ProducsRoutingModule } from './producs.routing';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsListComponent } from './components/products-list/products-list.component';



@NgModule({
  declarations: [
    ProductsRoutingComponent,
    ProductItemComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProducsRoutingModule
  ]
})
export class ProductsModule { }
