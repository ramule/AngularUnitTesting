import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  selectedUser: any;
  userList: any = [
    {
      "id": "1",
      "name": "Ravi",
      "age": "25"
    },
    {
      "id": "2",
      "name": "Vishal",
      "age": "27"
    },
    {
      "id": "3",
      "name": "Vinu",
      "age": "7"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onUserClick(user: any) {
    console.log(user);
    this.selectedUser = user;
  }

  userUpdate(event: any) {
    console.log(event);
    this.userList.forEach((element: any) => {
      if(element.id == event.id) {
        element.name = event.name;
        element.age = event.age;
      }
    });
  }

}
