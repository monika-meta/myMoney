import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyMyAssessmentPage } from './company-my-assessment.page';

describe('CompanyMyAssessmentPage', () => {
  let component: CompanyMyAssessmentPage;
  let fixture: ComponentFixture<CompanyMyAssessmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMyAssessmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyMyAssessmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
