import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyShareholdingPatternPage } from './company-shareholding-pattern.page';

describe('CompanyShareholdingPatternPage', () => {
  let component: CompanyShareholdingPatternPage;
  let fixture: ComponentFixture<CompanyShareholdingPatternPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyShareholdingPatternPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyShareholdingPatternPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
