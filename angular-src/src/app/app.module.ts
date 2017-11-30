import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { ParticlesModule } from 'angular-particle';

// import angular fire modules
import { environment } from './../environments/environment';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import services
import { LoginService } from './services/login.service';
import { TipService } from './services/tip.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

// import components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TipComponent } from './components/tip/tip.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TipPageComponent } from './components/tip-page/tip-page.component';
import { SplashComponent } from './components/splash/splash.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

const appRoutes: Routes = [
  {path: 'home', component: SplashComponent},
  {path: 'tip-page', component: TipPageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'register-page', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TipComponent,
    NavComponent,
    FooterComponent,
    TipPageComponent,
    SplashComponent,
    LoginPageComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    ParticlesModule
  ],
  providers: [
    LoginService,
    TipService,
    ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{ 
  


  constructor() {}

  ngOnInit() {
    
  }
}

