import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }   //added line

  ngOnInit(): void {
  }
  Route2LinkClick(){
    this.router.navigate(['/aboutus'], {} );                //added line
  }
  Route1LinkClick(){
    this.router.navigate(['/aboutus'], {} );             //added line
  }

}
