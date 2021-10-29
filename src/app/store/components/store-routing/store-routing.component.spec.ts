import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRoutingComponent } from './store-routing.component';

describe('StoreRoutingComponent', () => {
  let component: StoreRoutingComponent;
  let fixture: ComponentFixture<StoreRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
