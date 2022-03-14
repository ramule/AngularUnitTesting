import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHellodirective]'
})
export class HellodirectiveDirective implements OnInit {

  @Input('userInfo') username: string = "";

  @HostBinding('style.background-color') backgroundColor: string = "";

  @HostBinding('style.font-size') fontSize: string = "";

  @HostBinding('innerHTML') innerHtml: string = "";

  constructor() { }

  ngOnInit(): void {
    console.log('username', this.username);
      this.innerHtml = "Hello " + this.username;
      this.fontSize = "18px";
      this.backgroundColor = "green";
  }

  @HostListener('mouseover') onMouseOver() {
    this.fontSize = "30px";
    this.backgroundColor = "yellow";
  }

  @HostListener('mouseout') onMouseOut() {
    this.fontSize = "18px";
    this.backgroundColor = "green";
  }

}
