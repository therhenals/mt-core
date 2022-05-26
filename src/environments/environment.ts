// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { isPlatform } from "@ionic/angular";
import config from '../../capacitor.config';

const { appId } = config;

const domain = 'dev-kae17svc.us.auth0.com';

export const environment = {
  production: false,
  auth0ClientId: 'cjOt4vkow5z4bPEMJ307Zthg2I33pLNE',
  auth0Domain: domain,
  auth0RedirectUri: isPlatform('capacitor')
    ? `${appId}://${domain}/capacitor/${appId}/callback`
    : 'http://localhost:8100'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
