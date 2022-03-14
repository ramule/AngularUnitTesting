import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustReservationComponent } from './cust-reservation.component';

describe('CustReservationComponent', () => {
  let component: CustReservationComponent;
  let fixture: ComponentFixture<CustReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = new CustReservationComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('customer registration', () => {
    let custCount = component.registerCustomer();
    expect(custCount).toBe(11);
  });

  it('customer deregistration', () => {
    let custCount = component.deRegisterCustomer();
    expect(custCount).toBe(9);
  });

  it('room reserved', () => {
    // Arrange
    let custReservation = new CustReservationComponent();

    // Act
    let isReserved = custReservation.reserveRoom();

    // Assert
    expect(isReserved).toBeTruthy();
  })
});
