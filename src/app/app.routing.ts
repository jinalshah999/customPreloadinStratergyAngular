import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

  // Dashboard is Eager loaded
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},

  // Contact will be Preloaded
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule', data: {preload: true}},

  // Product will be Lazy loaded
  { path: 'product', loadChildren: './product/product.module#ProductModule'},

  { path: '**', component: DashboardComponent }

];
