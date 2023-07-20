import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstListComponent } from './first-list/first-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NuevosOnusComponent } from './nuevos-onus/onus.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstListComponent,
    NuevosOnusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
