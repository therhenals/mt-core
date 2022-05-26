import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MtCoreComponent } from './mt-core.component';
import { MtCoreConfig, MT_CONFIG } from './services/config/config.service';
import { AuthConfig, AuthConfigService, AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [MtCoreComponent],
  exports: [
    MtCoreComponent
  ],
  imports: [
    IonicModule,
    HttpClientModule,
    AuthModule.forRoot(),
  ],
})
export class MtCoreModule {
  static forRoot(config?: MtCoreConfig): ModuleWithProviders<MtCoreModule> {
    return {
      ngModule: MtCoreModule,
      providers: [
        {
          provide: MT_CONFIG,
          useValue: config,
        },
        {
          provide: AuthConfigService,
          useFactory: (): AuthConfig => ({
            domain: config.auth0Domain,
            clientId: config.auth0ClientId,
            redirectUri: config.auth0RedirectUri,
            httpInterceptor: {
              allowedList: ['*'],
            },
            useRefreshTokens: true,
            cacheLocation: "localstorage",
          })
        },
        { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
      ],
    };
  }
}


