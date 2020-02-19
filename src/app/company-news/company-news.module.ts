import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyNewsPageRoutingModule } from './company-news-routing.module';

import { CompanyNewsPage } from './company-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyNewsPageRoutingModule
  ],
  declarations: [CompanyNewsPage]
})
export class CompanyNewsPageModule {}
