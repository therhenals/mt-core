import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'mt-core.component.html',
  styleUrls: ['mt-core.component.scss'],
})
export class MtCoreComponent {

  constructor(
    private platform: Platform
  ) {
    if (this.platform.is('capacitor')) {
      StatusBar.setBackgroundColor({
        color: '#00377D'
      })
    }
  }


}
