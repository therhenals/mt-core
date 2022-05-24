import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs/tabs.page';
import { Tab1Page } from './tab1/tab1.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    TabsPage,
    Tab1Page
  ],
  exports: [TabsPage, Tab1Page],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule
  ]
})
export class PagesModule { }
