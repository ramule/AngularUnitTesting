import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-demo2',
  templateUrl: './custom-pipe-demo2.component.html',
  styleUrls: ['./custom-pipe-demo2.component.css']
})
export class CustomPipeDemo2Component implements OnInit {

  val: string = '';
  list: any[] = ['curly', 'simple', 'square'];
  constructor() { }

  ngOnInit(): void {
  }

}
