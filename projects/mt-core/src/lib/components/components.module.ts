import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BalanceComponent } from './balance/balance.component';
import { BackgroundComponent } from './background/background.component';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  declarations: [
    BalanceComponent,
    BackgroundComponent,
    BackButtonComponent
  ],
  exports: [
    BalanceComponent,
    BackgroundComponent,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
