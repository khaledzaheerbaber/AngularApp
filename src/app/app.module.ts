import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {HttpClientModule} from '@angular/common/http'; 


const routes: Routes = [
	{ path: '', component: LoginComponent ,canActivate:[AuthService]},
  { path: 'home', component: HomeComponent ,canActivate:[AuthService]},
  { path: 'login',	component: LoginComponent },
  { path: 'logout',	component: LogoutComponent },
	{ path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),canActivate:[AuthService] },
	{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule),canActivate:[AuthService] },
	{ path: '**', pathMatch: 'full',component: PageNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    ReactiveFormsModule,BrowserModule,RouterModule.forRoot(routes)
    ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
