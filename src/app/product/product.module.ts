import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { AddproductComponent } from './addproduct/addproduct.component';

import { routingProductArr } from './product.routing';

@NgModule({
declarations: [
  ProductComponent,
  AddproductComponent
],
imports: [
  CommonModule,
  routingProductArr
]
})

export class ProductModule {}
