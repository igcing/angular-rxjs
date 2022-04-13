import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedModule } from './shared/shared.module';
import { CoreComponent } from '@apps/core/core.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SharedModule ],
  declarations: [ AppComponent, HelloComponent, CoreComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
