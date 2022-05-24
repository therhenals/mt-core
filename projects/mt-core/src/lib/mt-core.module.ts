import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [],
  exports: [
    ComponentsModule,
    PagesModule,
  ],
  imports: [
    ComponentsModule,
    IonicModule,
    PagesModule
  ]
})
export class MtCoreModule { }
