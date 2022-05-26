import { App } from '@capacitor/app';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { Component, NgZone, OnInit } from '@angular/core';
import { ConfigService } from './services/config/config.service';
import { mergeMap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'mt-core.component.html',
  styleUrls: ['mt-core.component.scss'],
})
export class MtCoreComponent implements OnInit {

  constructor(
    private platform: Platform,
    public auth: AuthService,
    private ngZone: NgZone,
    private config: ConfigService,
  ) {
    this.setStatusBarColor();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isNativePlatform()) {
        SplashScreen.hide();
      }
    });
  }

  ngOnInit(): void {
    App.addListener('appUrlOpen', ({ url }) => {
      // Must run inside an NgZone for Angular to pick up the changes
      // https://capacitorjs.com/docs/guides/angular
      this.ngZone.run(() => {
        if (url?.startsWith(this.config.get().auth0RedirectUri)) {
          if (
            url.includes('state=') &&
            (url.includes('error=') || url.includes('code='))
          ) {
            this.auth
              .handleRedirectCallback(url)
              .pipe(mergeMap(() => Browser.close()))
              .subscribe();
          } else {
            Browser.close();
          }
        }
      });
    });
  }

  setStatusBarColor() {
    if (this.platform.is('capacitor')) {
      StatusBar.setBackgroundColor({
        color: '#00377D'
      })
    }
  }


}
