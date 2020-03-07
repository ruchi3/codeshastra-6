import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModelComponent } from './login-model/login-model.component';
import { SignUpModelComponent } from './sign-up-model/sign-up-model.component';
import { MyDiaryComponent } from './my-diary/my-diary.component';
import { PublicFeedComponent } from './public-feed/public-feed.component'
//import { NavbarComponent } from './sign-up-model/sign-up-model.component';


const routes: Routes = [
  { path: 'login', component: LoginModelComponent },
  { path: 'signup', component: SignUpModelComponent },
  { path: 'mydiary', component: MyDiaryComponent },
  { path: 'public', component: PublicFeedComponent },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
