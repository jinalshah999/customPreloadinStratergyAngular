import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const arr: Routes = [
  { path: '', component: ProductComponent },
  { path: 'add', component: AddproductComponent }
];

export const routingProductArr = RouterModule.forChild(arr);
