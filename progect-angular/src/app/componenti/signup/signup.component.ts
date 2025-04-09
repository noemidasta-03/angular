import {Component, OnInit} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from '@angular/material/button';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-signup',
  imports: [

    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) {
  }
  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signUp(email,password).subscribe(data=>{
      console.log(data);
    })
    form.reset();
  }
}
