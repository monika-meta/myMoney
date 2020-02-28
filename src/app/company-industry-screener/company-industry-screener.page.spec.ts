import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyIndustryScreenerPage } from './company-industry-screener.page';

describe('CompanyIndustryScreenerPage', () => {
  let component: CompanyIndustryScreenerPage;
  let fixture: ComponentFixture<CompanyIndustryScreenerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyIndustryScreenerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyIndustryScreenerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
