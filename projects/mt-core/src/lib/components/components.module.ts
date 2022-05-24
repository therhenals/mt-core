import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BalanceComponent } from './balance/balance.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    BalanceComponent,
    BackgroundComponent
  ],
  exports: [
    BalanceComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
