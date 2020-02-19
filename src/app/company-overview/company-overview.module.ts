import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyOverviewPageRoutingModule } from './company-overview-routing.module';

import { CompanyOverviewPage } from './company-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyOverviewPageRoutingModule
  ],
  declarations: [CompanyOverviewPage]
})
export class CompanyOverviewPageModule {}
