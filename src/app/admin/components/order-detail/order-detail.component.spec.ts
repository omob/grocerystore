import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderDetailComponent } from './order-detail.component';

describe('OrderDetailComponent', () => {
  let component: AdminOrderDetailComponent;
  let fixture: ComponentFixture<AdminOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
