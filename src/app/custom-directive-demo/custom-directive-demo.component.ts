import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-directive-demo',
  templateUrl: './custom-directive-demo.component.html',
  styleUrls: ['./custom-directive-demo.component.css']
})
export class CustomDirectiveDemoComponent implements OnInit {

  isClicked: boolean = false;
  username: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isClicked = true;
  }

}
