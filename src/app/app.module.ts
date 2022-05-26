import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MtCoreModule, MtRoutingModule, MtCoreComponent } from '@therhenals/mt-core';

import { environment } from '../environments/environment';

console.log(environment.auth0RedirectUri);

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    MtRoutingModule,
    MtCoreModule.forRoot({
      auth0ClientId: environment.auth0ClientId,
      auth0Domain: environment.auth0Domain,
      auth0RedirectUri: environment.auth0RedirectUri
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [MtCoreComponent],
})
export class AppModule { }
