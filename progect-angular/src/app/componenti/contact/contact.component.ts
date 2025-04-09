import {Component, OnInit} from '@angular/core';
import {ServizioProvaService} from '../../service/servizio-prova.service';
import {NgForOf,NgIf} from '@angular/common';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {ContattoComponent} from '../contatto/contatto.component';
import {FirebaseService} from '../../service/firebase.service';

@Component({
  selector: 'app-contact',
  imports: [NgForOf, RouterLink,RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  persone:any

  constructor(private firebase: FirebaseService,) {
  }
  ngOnInit() {
    this.firebase.getPersone('https://corso-angular-27576-default-rtdb.europe-west1.firebasedatabase.app/persone.json')
      .subscribe((data:any)=>{

      this.persone = Object.keys(data).map((key)=>{
        data[key]['id']=key
        return data[key];
      })
      console.log(this.persone)
    })
  }
}
