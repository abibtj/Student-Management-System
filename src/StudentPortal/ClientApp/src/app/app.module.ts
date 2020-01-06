import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

//Student Stuff
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentService } from './services/student.service';
import { AddStudentComponent } from './dashboard/add-student/add-student.component';
import { EditStudentComponent } from './dashboard/edit-student/edit-student.component';

import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';

//Angular Material Stuff
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatTableModule, MatInputModule,
  MatDialogModule, MatSelectModule, MatDatepickerModule,
  MatNativeDateModule, MatSnackBarModule, MatSortModule
} from '@angular/material';

//Ng2-Chart Stuff
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './dashboard/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './dashboard/charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DashboardComponent,
    AddStudentComponent,
    EditStudentComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthorizeGuard] },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    StudentService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddStudentComponent, EditStudentComponent]
})
export class AppModule { }
