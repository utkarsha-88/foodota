import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeitemComponent } from './cakeitem.component';

describe('CakeitemComponent', () => {
  let component: CakeitemComponent;
  let fixture: ComponentFixture<CakeitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
