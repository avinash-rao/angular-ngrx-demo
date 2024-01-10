import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsTableViewComponent } from './components/persons-table-view/persons-table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsTableViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
