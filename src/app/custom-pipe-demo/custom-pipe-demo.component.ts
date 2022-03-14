import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-demo',
  templateUrl: './custom-pipe-demo.component.html',
  styleUrls: ['./custom-pipe-demo.component.css']
})
export class CustomPipeDemoComponent implements OnInit {

  inputNumber: any;
  constructor() { }

  ngOnInit(): void {
  }

}
