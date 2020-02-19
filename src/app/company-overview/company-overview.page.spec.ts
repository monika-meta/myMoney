import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyOverviewPage } from './company-overview.page';

describe('CompanyOverviewPage', () => {
  let component: CompanyOverviewPage;
  let fixture: ComponentFixture<CompanyOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
