import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustReservationComponent } from './cust-reservation/cust-reservation.component';
import { EmployeeComponent } from './employee/employee.component';
import { EventTestComponent } from './event-test/event-test.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { CustomDirectiveDemoComponent } from './custom-directive-demo/custom-directive-demo.component';
import { HellodirectiveDirective } from './hellodirective.directive';
import { SquarePipe } from './square.pipe';
import { CustomPipeDemoComponent } from './custom-pipe-demo/custom-pipe-demo.component';
import { EnclosePipe } from './enclose.pipe';
import { CustomPipeDemo2Component } from './custom-pipe-demo2/custom-pipe-demo2.component';
import { SpyDemoComponent } from './spy-demo/spy-demo.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BasicMarbleComponent } from './basic-marble/basic-marble.component';

@NgModule({
  declarations: [
    AppComponent,
    CustReservationComponent,
    EmployeeComponent,
    EventTestComponent,
    ProductsComponent,
    LoginComponent,
    CustomDirectiveDemoComponent,
    HellodirectiveDirective,
    SquarePipe,
    CustomPipeDemoComponent,
    EnclosePipe,
    CustomPipeDemo2Component,
    SpyDemoComponent,
    UserListComponent,
    UserDetailsComponent,
    BasicMarbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
