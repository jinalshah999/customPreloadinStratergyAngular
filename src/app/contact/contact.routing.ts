import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const arr: Routes = [
  { path: '', component: ContactComponent }
];

export const routingContactArr = RouterModule.forChild(arr);
