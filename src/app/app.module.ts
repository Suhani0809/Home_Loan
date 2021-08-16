import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoanTrackerComponent } from './loan-tracker/loan-tracker.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AdminApplicationComponent } from './admin-application/admin-application.component';
import { UserApplicationComponent } from './user-application/user-application.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DocumentsComponent,
    HomeComponent,
    AdminLoginComponent,
    LoanTrackerComponent,
    RegisterAdminComponent,
    RegisterUserComponent,
    PropertyDetailsComponent,
    IncomeDetailsComponent,
    LoanDetailsComponent,
    AccountDetailsComponent,
    AdminApplicationComponent,
    UserApplicationComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'', component:HomeComponent},
      {path:'AdminLogin', component:AdminLoginComponent},
      {path:'RegisterAdmin', component:RegisterAdminComponent},
      {path:'RegisterAdmin/:id', component:RegisterAdminComponent},
      {path:'RegisterUser', component:RegisterUserComponent},
      {path:'RegisterUser/:id', component:RegisterUserComponent},
      {path:'ApplicationDetails', component:UserApplicationComponent},
      {path:'ApplicationDetails/:cid', component:UserApplicationComponent},
      {path:'AApplicationDetails', component:AdminApplicationComponent},
      {path:'AApplicationDetails/:aid', component:AdminApplicationComponent},
      {path:'Details', component:DetailsComponent},
      {path:'Details/:aid/:cid/:inId/:prId/:lId/:dId/:applicationNumber', component:DetailsComponent},
      {path:'IncomeDetails', component:IncomeDetailsComponent},
      {path:'IncomeDetails/:cid', component:IncomeDetailsComponent},
      {path:'PropertyDetails', component:PropertyDetailsComponent},
      {path:'PropertyDetails/:cid/:inId/:monthlySalary', component:PropertyDetailsComponent},
      {path:'LoanDetails', component:LoanDetailsComponent},
      {path:'LoanDetails/:cid/:inId/:prId/:monthlySalary', component:LoanDetailsComponent},
      {path:'AddDocuments', component:DocumentsComponent},
      {path:'AddDocuments/:id', component:DocumentsComponent},
      {path:'AddDocuments/:cid/:inId/:prId/:lId', component:DocumentsComponent},
      {path:'TrackLoan', component:LoanTrackerComponent},
      {path:'TrackLoan/:cid/:inId/:prId/:lId/:dId/:applicationNumber', component:LoanTrackerComponent}
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
