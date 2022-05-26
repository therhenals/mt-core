import { isPlatform } from "@ionic/angular";
import config from '../../capacitor.config';

const { appId } = config;

const domain = 'dev-kae17svc.us.auth0.com';

export const environment = {
  production: true,
  auth0ClientId: 'cjOt4vkow5z4bPEMJ307Zthg2I33pLNE',
  auth0Domain: domain,
  auth0RedirectUri: isPlatform('capacitor')
    ? `${appId}://${domain}/capacitor/${appId}/callback`
    : 'http://localhost:8100'
};