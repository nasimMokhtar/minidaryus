import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { DaycaresComponent } from './components/daycares/daycares.component';
import { KidsComponent } from './components/kids/kids.component';
import { MunicipalitiesComponent } from './components/municipalities/municipalities.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppErrorHandler} from './common/errors/app-error-handler';
import {DataService} from './services/data.service';
import {UserService} from './services/user.service';
import {KidService} from './services/kid.service';
import {DaycareService} from './services/daycare.service';
import {MunicipalityService} from './services/municipality.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LikeComponent } from './components/like/like.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    DaycaresComponent,
    KidsComponent,
    MunicipalitiesComponent,
    NotFoundComponent,
    LikeComponent,
    LogoutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '' , component: LoginComponent},
      {path: 'register' , component: RegisterComponent},
      {path: 'home' , component: HomeComponent},
      {path: 'kids' , component: KidsComponent},
      {path: 'daycares' , component: DaycaresComponent},
      {path: 'municipality' , component: MunicipalitiesComponent},
      {path: 'users' , component: UsersComponent},
      {path: 'logout' , component: LogoutComponent},
      {path: '**' , component: NotFoundComponent}
    ])
  ],
  providers: [
    UserService,
    KidService,
    DaycareService,
    MunicipalityService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
