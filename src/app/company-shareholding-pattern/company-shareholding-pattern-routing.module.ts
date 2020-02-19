import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyShareholdingPatternPage } from './company-shareholding-pattern.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyShareholdingPatternPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyShareholdingPatternPageRoutingModule {}
