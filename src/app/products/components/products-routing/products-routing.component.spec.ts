import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRoutingComponent } from './products-routing.component';

describe('ProductsRoutingComponent', () => {
  let component: ProductsRoutingComponent;
  let fixture: ComponentFixture<ProductsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
