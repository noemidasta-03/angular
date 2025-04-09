import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ServizioProvaService} from '../../service/servizio-prova.service';

@Component({
  selector: 'app-contatto',
  imports: [],
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit {
  id: number | undefined;
  persona:any
  constructor(private route: ActivatedRoute, private servizioProva:ServizioProvaService) {
  }
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
        this.id= +params.getAll('id');
        this.persona=this.servizioProva.getPersona(this.id)
    })
  }
}
