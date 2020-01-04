import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';

import { routingContactArr } from './contact.routing';

@NgModule({
declarations: [
  ContactComponent
],
imports: [
  CommonModule,
  routingContactArr
]
})

export class ContactModule {}
