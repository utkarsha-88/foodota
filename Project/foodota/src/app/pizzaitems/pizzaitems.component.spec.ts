import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaitemsComponent } from './pizzaitems.component';

describe('PizzaitemsComponent', () => {
  let component: PizzaitemsComponent;
  let fixture: ComponentFixture<PizzaitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
