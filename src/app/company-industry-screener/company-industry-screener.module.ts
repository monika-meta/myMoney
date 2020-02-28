import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyIndustryScreenerPageRoutingModule } from './company-industry-screener-routing.module';

import { CompanyIndustryScreenerPage } from './company-industry-screener.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyIndustryScreenerPageRoutingModule
  ],
  declarations: [CompanyIndustryScreenerPage],
  entryComponents: [CompanyIndustryScreenerPage]
})
export class CompanyIndustryScreenerPageModule {}
