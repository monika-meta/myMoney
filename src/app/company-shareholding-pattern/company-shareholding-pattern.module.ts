import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyShareholdingPatternPageRoutingModule } from './company-shareholding-pattern-routing.module';

import { CompanyShareholdingPatternPage } from './company-shareholding-pattern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyShareholdingPatternPageRoutingModule
  ],
  declarations: [CompanyShareholdingPatternPage],
  entryComponents: [CompanyShareholdingPatternPage]
})
export class CompanyShareholdingPatternPageModule {}
