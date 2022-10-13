import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailValueComponent } from './detail-value/detail-value.component';

@NgModule({
  declarations: [	
    AppComponent,
      ValueComponent,
      DetailValueComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
