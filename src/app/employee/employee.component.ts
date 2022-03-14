import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  salarySlip: string = "";
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.authenticate();
  }

  getSalarySlip() {
    if(this.authService.checkAuthentication()) {
      this.salarySlip = "Salary Slip";
    }
    else {
      this.salarySlip = "Not Authenticated";
    }
    return this.salarySlip;
  }

}
