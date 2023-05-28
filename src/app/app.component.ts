import { Component } from '@angular/core';
import { Router } from '@angular/router'; // added line

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingtoanotherpage';

  constructor(private router: Router){}
}

