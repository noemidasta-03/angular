import {Component, Injector, OnInit} from '@angular/core';

import {FormsModule} from '@angular/forms';

import {RouterLink, RouterOutlet} from '@angular/router';
import {ServizioProvaService} from './service/servizio-prova.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth/auth.service';







@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent implements OnInit {

  numero = 5
  oggi= Date.now()
  title = 'prova';

 constructor(private servizioProva: ServizioProvaService, http: HttpClient,private authService: AuthService) {
 }

  ngOnInit() {
    if(localStorage.getItem('user')){
      const user= JSON.parse(localStorage.getItem('user')!)
      this.authService.createUser(user.email,user.id,user._token,user._expirationDate);
      console.log(this.authService.user)
    }
  }

  onLogout() {
   this.authService.logout();
  }


}
