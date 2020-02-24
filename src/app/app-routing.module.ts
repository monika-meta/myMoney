import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './list/list.module#ListPageModule' },
  {
    path: 'watch',
    loadChildren: () => import('./watch/watch.module').then(m => m.WatchPageModule)
  },
  {
    path: 'company-info',
    loadChildren: () => import('./company-info/company-info.module').then( m => m.CompanyInfoPageModule)
  },
  {
    path: 'company-overview',
    loadChildren: () => import('./company-overview/company-overview.module').then( m => m.CompanyOverviewPageModule)
  },
  {
    path: 'company-shareholding-pattern',
    loadChildren: () => import('./company-shareholding-pattern/company-shareholding-pattern.module').then( m => m.CompanyShareholdingPatternPageModule)
  },
  {
    path: 'company-news',
    loadChildren: () => import('./company-news/company-news.module').then( m => m.CompanyNewsPageModule)
  },
  {
    path: 'company-decision-maker',
    loadChildren: () => import('./company-decision-maker/company-decision-maker.module').then( m => m.CompanyDecisionMakerPageModule)
  },
  {
    path: 'company-my-assessment',
    loadChildren: () => import('./company-my-assessment/company-my-assessment.module').then( m => m.CompanyMyAssessmentPageModule)
  },
  {
    path: 'company-about',
    loadChildren: () => import('./company-about/company-about.module').then( m => m.CompanyAboutPageModule)
  },
  {
    path: 'chart-display',
    loadChildren: () => import('./chart-display/chart-display.module').then( m => m.ChartDisplayPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
