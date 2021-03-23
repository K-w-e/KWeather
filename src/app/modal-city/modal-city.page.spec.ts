import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCityPage } from './modal-city.page';

describe('ModalCityPage', () => {
  let component: ModalCityPage;
  let fixture: ComponentFixture<ModalCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
