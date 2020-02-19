import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyNewsPage } from './company-news.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyNewsPageRoutingModule {}
