import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routes } from './app.routing';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { CustomPreloading } from './custom-preloading';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes, { preloadingStrategy: CustomPreloading}),

  ],
  providers: [ CustomPreloading ],
  bootstrap: [AppComponent]
})
export class AppModule { }
