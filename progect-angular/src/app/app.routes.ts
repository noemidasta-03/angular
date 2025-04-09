import {CanActivateFn, Routes} from '@angular/router';

import {HomepageComponent} from './componenti/homepage/homepage.component';
import {ContactComponent} from './componenti/contact/contact.component';
import {ContattoComponent} from './componenti/contatto/contatto.component';
import {NotFoundComponent} from './componenti/not-found/not-found.component';
import {AuthGuard} from './auth/auth.guard';
import {SignupComponent} from './componenti/signup/signup.component';
import {SigninComponent} from './componenti/signin/signin.component';

export const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/homepage'},
  { path: 'homepage', component: HomepageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'contact', component: ContactComponent, canActivate:[AuthGuard],canActivateChild:[AuthGuard], children: [
      {path:':id',component:ContattoComponent},
    ]},
  {path:'404',component:NotFoundComponent},
  {path:'**', redirectTo:'/404'}

];
