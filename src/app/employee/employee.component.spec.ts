import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../authentication.service';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [ AuthenticationService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('spy on check authentication returns true', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
    let salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('Salary Slip');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it('spy on check authentication returns false', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(false);
    let salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('Not Authenticated');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it('Should assert value for "h1" element to be value of component', () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h1.textContent).toEqual(component.salarySlip);
  });
});
