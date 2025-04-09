import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {AuthService} from '../../auth/auth.service';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-signin',
  imports: [
    FormsModule,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatFormField,
    MatButton
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) {
  }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email,password).subscribe((data:any)=>{
      console.log(data);

      const expirationDate=new Date(new Date().getTime() + data.expiresIn *1000)
      this.authService.createUser(data.email, data.localId,data.idToken , expirationDate)
      localStorage.setItem('user',JSON.stringify(this.authService.user));

      console.log(this.authService.user)

    })
    form.reset();
  }
}
