import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWatchModalPage } from './add-watch-modal.page';

describe('AddWatchModalPage', () => {
  let component: AddWatchModalPage;
  let fixture: ComponentFixture<AddWatchModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWatchModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWatchModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
