import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToggleTimeStampComponent } from './toggle-time-stamp/toggle-time-stamp.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ToggleTimeStampComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
