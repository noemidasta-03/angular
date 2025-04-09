import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIKey='AIzaSyDzS2sd8CJCROy2AngpOIJ_GEPcAo7YflU';
  signUpURL=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`
  signInURL=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`
  isLoggedIn= true;
  isAdmin= true;
  user:User |null= null

  constructor(private http: HttpClient,private router: Router) { }
  isAuthenticated() {
    return this.isLoggedIn;
  }
  isRoleAdmin(){
    return this.isAdmin
  }
  createUser(email:string,id:string,token:string , expirationDate:Date ){
    this.user = new User(email,id,token,expirationDate);
    this.isLoggedIn = true;
  }

  signUp(email:string, password: string ){
    return this.http.post(this.signUpURL,{email:email,password:password ,returnSecureToken:true} )
  }
  signIn(email:string, password: string ){
    return this.http.post(this.signInURL,{email:email,password:password ,returnSecureToken:true} )
  }
  logout(){
    this.isLoggedIn=false;
    this.user=null;
    localStorage.removeItem('user');
    this.router.navigate(['/signin']).then(()=>{
      console.log('Navigazione avvenuta con successo')
    }).catch((error)=>{
      console.log('errore durante la navigazione', error);
    });

  }
}
