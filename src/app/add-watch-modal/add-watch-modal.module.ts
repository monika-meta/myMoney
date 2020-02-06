import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWatchModalPageRoutingModule } from './add-watch-modal-routing.module';

import { AddWatchModalPage } from './add-watch-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWatchModalPageRoutingModule
  ],
  exports: [AddWatchModalPage],
  declarations: [AddWatchModalPage]
})
export class AddWatchModalPageModule {}
