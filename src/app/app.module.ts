import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FIRSTCComponent } from './first-c/first-c.component';
import { SECONDCComponent } from './second-c/second-c.component';
import { THIRDCComponent } from './third-c/third-c.component';
import { FOURTHCComponent } from './fourth-c/fourth-c.component';
import { FIFTHCComponent } from './fifth-c/fifth-c.component';
import { SIXTHCComponent } from './sixth-c/sixth-c.component';
import { SEVENTHCComponent } from './seventh-c/seventh-c.component';
import { EIGHTHCComponent } from './eighth-c/eighth-c.component';

@NgModule({
  declarations: [
    AppComponent,
    FIRSTCComponent,
    SECONDCComponent,
    THIRDCComponent,
    FOURTHCComponent,
    FIFTHCComponent,
    SIXTHCComponent,
    SEVENTHCComponent,
    EIGHTHCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
