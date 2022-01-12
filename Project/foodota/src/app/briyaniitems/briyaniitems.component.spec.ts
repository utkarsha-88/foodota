import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriyaniitemsComponent } from './briyaniitems.component';

describe('BriyaniitemsComponent', () => {
  let component: BriyaniitemsComponent;
  let fixture: ComponentFixture<BriyaniitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriyaniitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriyaniitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
