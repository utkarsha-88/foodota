import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkitemsComponent } from './drinkitems.component';

describe('DrinkitemsComponent', () => {
  let component: DrinkitemsComponent;
  let fixture: ComponentFixture<DrinkitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
