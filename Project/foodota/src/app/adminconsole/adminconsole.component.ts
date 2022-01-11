import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminconsole',
  templateUrl: './adminconsole.component.html',
  styleUrls: ['./adminconsole.component.css']
})
export class AdminconsoleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getdetails(){
  this.router.navigate(['/customerdetails']);
  }
}
