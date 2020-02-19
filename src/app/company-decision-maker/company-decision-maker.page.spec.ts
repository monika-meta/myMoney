import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyDecisionMakerPage } from './company-decision-maker.page';

describe('CompanyDecisionMakerPage', () => {
  let component: CompanyDecisionMakerPage;
  let fixture: ComponentFixture<CompanyDecisionMakerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDecisionMakerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyDecisionMakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
