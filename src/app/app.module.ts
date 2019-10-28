import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToggleTimeStampComponent } from './toggle-time-stamp/toggle-time-stamp.component';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ToggleTimeStampComponent, TimeAgoPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
