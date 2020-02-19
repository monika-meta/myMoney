import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyDecisionMakerPage } from './company-decision-maker.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyDecisionMakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyDecisionMakerPageRoutingModule {}
