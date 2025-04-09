import {Component, OnInit} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatOption, MatSelect} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {FirebaseService} from '../../service/firebase.service';

@Component({
  selector: 'app-homepage',
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatFormFieldModule,
    MatButton,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  homeform!: FormGroup ;

  constructor(private firebase:FirebaseService) {
  }
  ngOnInit() {
    this.homeform = new FormGroup({
      nome: new FormControl(null,Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    });

  }

  onSubmit() {
    console.log(this.homeform);

    this.firebase.insertPersona('https://corso-angular-27576-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
      {nome:this.homeform.value.nome, email: this.homeform.value.email}).subscribe(data=>{
      console.log(data)
    })
  }

  onDeletePersona(){
    this.firebase.deletePersona('https://corso-angular-27576-default-rtdb.europe-west1.firebasedatabase.app/persone','-ONJz2KjnO0Ea8WzeJgq')
      .subscribe(data=>{console.log(data)})
  }
  onPatchPersona(){
    this.firebase.patchPersona('https://corso-angular-27576-default-rtdb.europe-west1.firebasedatabase.app/persone',
      '-ONKVSYG-lyv-VzAUkje',
      {email:'prova@prova.gmail.com'}).subscribe(data=>{console.log(data)})
  }


}
