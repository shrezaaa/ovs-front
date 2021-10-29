import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppongBasketComponent } from './shoppong-basket.component';

describe('ShoppongBasketComponent', () => {
  let component: ShoppongBasketComponent;
  let fixture: ComponentFixture<ShoppongBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppongBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppongBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
