import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModelComponent } from './login-model/login-model.component';
import { SignUpModelComponent } from './sign-up-model/sign-up-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MyDiaryComponent } from './my-diary/my-diary.component';
import { PublicFeedComponent } from './public-feed/public-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginModelComponent,
    SignUpModelComponent,
    NavbarComponent,
    MyDiaryComponent,
    PublicFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
