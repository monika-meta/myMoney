import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyAboutPage } from './company-about.page';

describe('CompanyAboutPage', () => {
  let component: CompanyAboutPage;
  let fixture: ComponentFixture<CompanyAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
