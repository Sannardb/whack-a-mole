import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
