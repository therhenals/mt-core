import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MtCoreComponent } from './mt-core.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [MtCoreComponent],
  exports: [
    ComponentsModule,
    PagesModule,
    MtCoreComponent
  ],
  imports: [
    ComponentsModule,
    IonicModule,
    PagesModule
  ],
})
export class MtCoreModule { }
