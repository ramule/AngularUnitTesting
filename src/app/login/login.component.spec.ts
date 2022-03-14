import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { first } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

class MockAuthService extends AuthService {
  public isAuthenticated() {
    return true;
  }
}

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testBedAuthservice: AuthService;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
      providers: [AuthService]
    })
    .compileComponents();
  });

  TestBed.overrideComponent(LoginComponent,
    {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}}
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugEl = fixture.debugElement;
    testBedAuthservice = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should check the service', () => {
    expect(testBedAuthservice instanceof AuthService).toBeTruthy();
  });

  xit('should inject service using inject funtion and check its instance', inject([AuthService], (inectedService: AuthService) => {
    expect(inectedService).toBeTruthy();
    expect(inectedService instanceof AuthService).toBeTruthy();
  }));

  xit('should test injected service using component overriding', () => {
    let overridenService = fixture.debugElement.injector.get(AuthService);
    expect(overridenService instanceof MockAuthService).toBeTruthy();
  });

  xit('[Email- check] - should check user email id is invalid', () => {
    let email: any = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('abc');
    expect(email.errors['email']).toBeTruthy();
  });

  xit('[Email- check] - should check user email address is correct', () => {
    let email: any = component.loginForm.controls['email'];
    email.setValue('abc@gmail.com');
    expect(email.errors).toBeNull();
  });

  it('[password - check] - should check password errors', () => {
    let pwd: any = component.loginForm.controls['password'];
    expect(pwd.errors['required']).toBeTruthy();
    pwd.setValue('1234');
    expect(pwd.errors['minlength']).toBeTruthy();
  });

  it('[password - check] - should check correct password', () => {
    let pwd: any = component.loginForm.controls['password'];
    pwd.setValue('123456');
    expect(pwd.errors).toBeNull();
    expect(pwd.valid).toBeTruthy();
  });

  it('[form - check] - should check form is valid or no values entered', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('[form - check] - should check form is valid or not when values entered', () => {
    component.loginForm.controls['email'].setValue('abc@gmail.com');
    component.loginForm.controls['password'].setValue('123456');

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('[Form - submit] - should check form is submitted', () => {
    // check form is invalid
    expect(component.loginForm.invalid).toBeTruthy();
    let btn = debugEl.query(By.css('button'));
    // check button is disabled
    expect(btn.nativeElement.disabled).toBeTruthy();

    component.loginForm.controls['email'].setValue('abc@gmail.com');
    component.loginForm.controls['password'].setValue('123456');
    fixture.detectChanges();

    expect(btn.nativeElement.disabled).toBeFalsy();
  })
});
