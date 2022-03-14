import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-test',
  templateUrl: './event-test.component.html',
  styleUrls: ['./event-test.component.css']
})
export class EventTestComponent implements OnInit {

  counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onAddBtnClick() {
    this.counter++;
  }

  onRemoveBtnClick() {
    this.counter--;
  }
}
