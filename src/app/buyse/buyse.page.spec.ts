import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuysePage } from './buyse.page';

describe('BuysePage', () => {
  let component: BuysePage;
  let fixture: ComponentFixture<BuysePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuysePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuysePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
