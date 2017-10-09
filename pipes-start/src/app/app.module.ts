import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ShortenPipe } from './shorten.pipe';
import { ShortnamePipe } from './shortname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    ShortnamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
