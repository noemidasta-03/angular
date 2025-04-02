import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnDestroy,
  OnInit
} from '@angular/core';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-prova',
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit ,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,DoCheck,OnDestroy{
  constructor() {
    console.log("costruttore");
  }


  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
