import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-reservation',
  templateUrl: './cust-reservation.component.html',
  styleUrls: ['./cust-reservation.component.css']
})
export class CustReservationComponent implements OnInit {

  hotelCapacity = 30;
  customerCount = 10;
  constructor() { }

  ngOnInit(): void {
  }

  registerCustomer() {
    return ++this.customerCount;
  }

  deRegisterCustomer() {
    return --this.customerCount;
  }

  reserveRoom(): boolean {
    let roomReserved = false;
    if(this.customerCount < this.hotelCapacity) {
      this.customerCount++;
      roomReserved = true;
    }
    return roomReserved;
  }
}
