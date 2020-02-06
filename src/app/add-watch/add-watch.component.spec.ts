import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWatchComponent } from './add-watch.component';

describe('AddWatchComponent', () => {
  let component: AddWatchComponent;
  let fixture: ComponentFixture<AddWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWatchComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
