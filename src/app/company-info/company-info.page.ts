import { Component, OnInit } from '@angular/core';
import { CompanyOverviewPage } from '../company-overview/company-overview.page';
import { CompanyAboutPage } from '../company-about/company-about.page';
import { CompanyShareholdingPatternPage } from '../company-shareholding-pattern/company-shareholding-pattern.page';
import { CompanyNewsPage } from '../company-news/company-news.page';
import { CompanyDecisionMakerPage } from '../company-decision-maker/company-decision-maker.page';
import { CompanyMyAssessmentPage } from '../company-my-assessment/company-my-assessment.page';
import { CompanyIndustryScreenerPage } from '../company-industry-screener/company-industry-screener.page';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.page.html',
  styleUrls: ['./company-info.page.scss'],
})
export class CompanyInfoPage implements OnInit {
  companyOverviewPage = CompanyOverviewPage;
  companyShareholdingPatternPage = CompanyShareholdingPatternPage;
  companyNewsPage = CompanyNewsPage;
  companyDecisionMakerPage = CompanyDecisionMakerPage;
  companyMyAssessmentPage = CompanyMyAssessmentPage;
  companyAboutPage = CompanyAboutPage;
  companyIndustryScreenerPage = CompanyIndustryScreenerPage;

  constructor() { }

  ngOnInit() {
  }

}
