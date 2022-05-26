import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap, switchMap, tap } from 'rxjs/operators';
import { ConfigService } from '../../services/config/config.service';


@Component({
  selector: 'mt-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user$ = this.auth.isAuthenticated$.pipe(switchMap(() => this.auth.user$));

  constructor(
    public auth: AuthService,
    private config: ConfigService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http
      .get("https://fakestoreapi.com/products").subscribe(
        (response) => { console.log(response) },
        (error) => { console.log(error); });
  }

  login() {
    this.auth
      .buildAuthorizeUrl()
      .pipe(mergeMap((url) => Browser.open({ url, windowName: '_self' })))
      .subscribe();
  }

  logout() {
    // Use the SDK to build the logout URL
    this.auth
      .buildLogoutUrl({ returnTo: this.config.get().auth0RedirectUri })
      .pipe(
        tap((url) => {
          // Call the logout fuction, but only log out locally
          this.auth.logout({ localOnly: true });
          // Redirect to Auth0 using the Browser plugin, to clear the user's session
          Browser.open({ url, windowName: '_self' });
        })
      )
      .subscribe();
  }

}
