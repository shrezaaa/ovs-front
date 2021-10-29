import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingComponent } from './components/products-routing/products-routing.component';
import { ProducsRoutingModule } from './producs.routing';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

const MATMODULES = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
];
@NgModule({
  declarations: [
    ProductsRoutingComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    ProducsRoutingModule,
    ...MATMODULES,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ProductsModule {}
