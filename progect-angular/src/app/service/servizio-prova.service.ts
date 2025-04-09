import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  persone =[
    {nome:"luca", cognome:"rossi" ,isOnline:false,color: "red"},
    {nome:"marco", cognome:"bianchi",isOnline:true,color: "yellow"},
    {nome:"anna", cognome:"neri",isOnline:false,color: "blue"},
    {nome:"lucia", cognome:"abb",isOnline:false,color: "green"},
    {nome:"leo", cognome:"wella",isOnline:true,color: "purple"},

  ]


  constructor() { }

  getPersone(){
    return this.persone;
  }
  getPersona(idex: number){
    return this.persone[idex];
  }
}
