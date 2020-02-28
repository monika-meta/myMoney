import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyIndustryScreenerPage } from './company-industry-screener.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyIndustryScreenerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyIndustryScreenerPageRoutingModule {}
