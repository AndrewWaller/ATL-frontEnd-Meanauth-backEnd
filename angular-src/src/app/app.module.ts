import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

// import angular fire modules
import { environment } from './../environments/environment';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import services
import { LoginService } from './services/login.service';
import { TipService } from './services/tip.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TipComponent } from './components/tip/tip.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TipPageComponent } from './components/tip-page/tip-page.component';
import { SplashComponent } from './components/splash/splash.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
const appRoutes: Routes = [
  {path: 'home', component: SplashComponent},
  {path: 'tip-page', component: TipPageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'register-page', component: RegisterPageComponent},
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
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoginService,
    TipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
