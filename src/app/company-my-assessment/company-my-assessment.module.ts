import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyMyAssessmentPageRoutingModule } from './company-my-assessment-routing.module';

import { CompanyMyAssessmentPage } from './company-my-assessment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyMyAssessmentPageRoutingModule
  ],
  declarations: [CompanyMyAssessmentPage]
})
export class CompanyMyAssessmentPageModule {}
