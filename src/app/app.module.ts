import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MtCoreModule, MtRoutingModule, MtCoreComponent } from '@therhenals/mt-core';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    MtRoutingModule,
    MtCoreModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [MtCoreComponent],
})
export class AppModule { }
