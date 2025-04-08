import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Welcome to Angular Demo';
  description = 'This is a demonstration of Angular 19 features including routing, API consumption, and reactive forms.';
}
