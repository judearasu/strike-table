import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CSTableComponent } from './components/cs-table/cs-table.component';
import { CSModalComponent } from './components/cs-modal/cs-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CSTableComponent,
    CSModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
