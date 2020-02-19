import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyAboutPage } from './company-about.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyAboutPageRoutingModule {}
