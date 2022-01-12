import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamitemsComponent } from './icecreamitems.component';

describe('IcecreamitemsComponent', () => {
  let component: IcecreamitemsComponent;
  let fixture: ComponentFixture<IcecreamitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcecreamitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
