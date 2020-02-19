import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyAboutPageRoutingModule } from './company-about-routing.module';

import { CompanyAboutPage } from './company-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyAboutPageRoutingModule
  ],
  declarations: [CompanyAboutPage]
})
export class CompanyAboutPageModule {}
