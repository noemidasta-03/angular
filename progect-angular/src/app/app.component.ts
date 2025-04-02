import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvaComponent } from './prova/prova.component';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ProvaComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'progect-angular';
}
