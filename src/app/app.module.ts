import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { LayoutComponent } from './layout/layout.component';
import { MoleHoleComponent } from './mole-hole/mole-hole.component';


@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    LayoutComponent,
    MoleHoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
