import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store.routing';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreRoutingComponent } from './components/store-routing/store-routing.component';

const MATMODULES = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
];
@NgModule({
  declarations: [
    StoreRoutingComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ...MATMODULES,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class StoreModule {}
