import { Component } from '@angular/core';
import { Data } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: false,

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sarin-first-app';

  editData: Data;
  data: Data;
}