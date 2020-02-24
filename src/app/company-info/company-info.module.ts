import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyInfoPageRoutingModule } from './company-info-routing.module';

import { CompanyInfoPage } from './company-info.page';

import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { CompanyOverviewPageModule } from '../company-overview/company-overview.module';
import { CompanyShareholdingPatternPageModule } from '../company-shareholding-pattern/company-shareholding-pattern.module';
import { CompanyNewsPageModule } from '../company-news/company-news.module';
import { CompanyDecisionMakerPageModule } from '../company-decision-maker/company-decision-maker.module';
import { CompanyMyAssessmentPageModule } from '../company-my-assessment/company-my-assessment.module';
import { CompanyAboutPageModule } from '../company-about/company-about.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyInfoPageRoutingModule,
    SuperTabsModule,
    CompanyOverviewPageModule,
    CompanyShareholdingPatternPageModule,
    CompanyNewsPageModule,
    CompanyDecisionMakerPageModule,
    CompanyMyAssessmentPageModule,
    CompanyAboutPageModule
  ],
  declarations: [CompanyInfoPage]
})
export class CompanyInfoPageModule {}
