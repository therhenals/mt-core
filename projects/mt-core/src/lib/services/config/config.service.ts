import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export interface MtCoreConfig {
  auth0Domain: string;
  auth0ClientId: string;
  auth0RedirectUri: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: MtCoreConfig;

  constructor(@Optional() @Inject(MT_CONFIG) config?: MtCoreConfig) {
    this.config = config;
  }

  get(): MtCoreConfig {
    return this.config;
  }
}


export const MT_CONFIG = new InjectionToken<MtCoreConfig>(
  'ConfigService'
);
