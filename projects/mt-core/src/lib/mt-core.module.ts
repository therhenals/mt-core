import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MtCoreComponent } from './mt-core.component';

@NgModule({
  declarations: [MtCoreComponent],
  exports: [
    MtCoreComponent
  ],
  imports: [
    IonicModule,
  ],
})
export class MtCoreModule { }
