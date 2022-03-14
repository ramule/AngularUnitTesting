import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { User } from '../User';
import { UserDetailsComponent } from '../user-details/user-details.component';

import { UserListComponent } from './user-list.component';

xdescribe('UserListComponent', () => {
  let userListComponent: UserListComponent;
  let userDetailComponent: UserDetailsComponent;

  let listFixure: ComponentFixture<UserListComponent>;
  let detailFixure: ComponentFixture<UserDetailsComponent>;

  let listDebugEl: DebugElement;
  let detailDebugEl: DebugElement;

  let user: User;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    listFixure = TestBed.createComponent(UserListComponent);
    userListComponent = listFixure.componentInstance;

    listDebugEl = listFixure.debugElement;
    user = new User;
    user.name = 'Aman';
    user.id = "1";
    user.age = "29";
    userListComponent.selectedUser = user;
    listFixure.detectChanges();

    detailFixure = TestBed.createComponent(UserDetailsComponent);
    userDetailComponent = detailFixure.componentInstance;
    detailFixure.detectChanges();
    detailDebugEl = listFixure.debugElement;
  });

  it('should create', () => {
    expect(userListComponent).toBeTruthy();
  });

  it('should test the @input changes', async(() => {
    let idDiv = listDebugEl.query(By.css('#userid')).nativeElement.innerText;
    expect(idDiv).toContain('1');

    listFixure.whenStable().then(() => {
      let inputEl = listDebugEl.query(By.css('#name')).nativeElement.value;
      expect(inputEl).toContain('Aman');
    })
  }))

  it('should test the @output changes', () => {
    user.age = "100";
    let selectedUser: User = {"id": "", "name": "", "age": ""};

    userDetailComponent.updatedUser.subscribe(data => {
      selectedUser = data;
    });

    userDetailComponent.id = user.id;
    userDetailComponent.name = user.name;
    userDetailComponent.age = user.age;

    userDetailComponent.updateUser();
    expect(selectedUser.age).toBe(user.age);
  })
});
