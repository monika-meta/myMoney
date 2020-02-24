import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartDisplayPageRoutingModule } from './chart-display-routing.module';

import { ChartDisplayPage } from './chart-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartDisplayPageRoutingModule
  ],
  declarations: [ChartDisplayPage]
})
export class ChartDisplayPageModule {}
