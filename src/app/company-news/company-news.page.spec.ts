import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyNewsPage } from './company-news.page';

describe('CompanyNewsPage', () => {
  let component: CompanyNewsPage;
  let fixture: ComponentFixture<CompanyNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
