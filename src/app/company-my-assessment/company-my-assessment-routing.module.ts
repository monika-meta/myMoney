import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyMyAssessmentPage } from './company-my-assessment.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyMyAssessmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyMyAssessmentPageRoutingModule {}
