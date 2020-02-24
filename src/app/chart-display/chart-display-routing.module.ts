import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartDisplayPage } from './chart-display.page';

const routes: Routes = [
  {
    path: '',
    component: ChartDisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartDisplayPageRoutingModule {}
