import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { LayoutComponent } from './components/layout/layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: LayoutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'service', component: ServicesComponent },
    ]
  },

  { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
