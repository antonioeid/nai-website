import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor() {

    window.scrollTo(0, 0);
    
  }



}
