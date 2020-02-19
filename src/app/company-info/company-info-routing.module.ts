import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyInfoPage } from './company-info.page';

const routes: Routes = [
  {
    path: 'company-info',
    component: CompanyInfoPage,
    children: [
      {
        path: 'company-overview',
        children: [
          {
            path: '',
            loadChildren: '../company-overview/company-overview.module#CompanyOverviewPageModule'
          }
        ]
      },
      {
        path: 'company-shareholding-pattern',
        children: [
          {
            path: '',
            loadChildren: '../company-shareholding-pattern/company-shareholding-pattern.module#CompanyShareholdingPatternPageModule'
          }
        ]
      },
      {
        path: 'company-news',
        children: [
          {
            path: '',
            loadChildren: '../company-news/company-news.module#CompanyNewsPageModule'
          }
        ]
      },
      {
        path: 'company-decision-maker',
        children: [
          {
            path: '',
            loadChildren: '../company-decision-maker/company-decision-maker.module#CompanyDecisionMakerPageModule'
          }
        ]
      },
      {
        path: 'company-my-assessment',
        children: [
          {
            path: '',
            loadChildren: '../company-my-assessment/company-my-assessment.module#CompanyMyAssessmentPageModule'
          }
        ]
      },
      {
        path: 'company-about',
        children: [
          {
            path: '',
            loadChildren: '../company-about/company-about.module#CompanyAboutPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/company-info/company-overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/company-info/company-info/company-overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyInfoPageRoutingModule {}
