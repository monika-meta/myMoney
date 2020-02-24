import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyDecisionMakerPageRoutingModule } from './company-decision-maker-routing.module';

import { CompanyDecisionMakerPage } from './company-decision-maker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyDecisionMakerPageRoutingModule
  ],
  declarations: [CompanyDecisionMakerPage],
  entryComponents: [CompanyDecisionMakerPage]
})
export class CompanyDecisionMakerPageModule {}
