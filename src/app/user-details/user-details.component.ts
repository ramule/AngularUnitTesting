import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  name: any;
  age: any;
  id: any;

  @Input('selUser') set setUser(user: any) {

    if(user != null && user!= undefined) {
      this.name = user.name;
      this.age = user.age;
      this.id = user.id;
    }
  }

  @Output() updatedUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateUser() {
    let userDetails: any = {
      id: "",
      name: "",
      age: ""
    };

    userDetails.id = this.id;
    userDetails.name = this.name;
    userDetails.age = this.age;

    this.updatedUser.emit(userDetails);
  }

}
