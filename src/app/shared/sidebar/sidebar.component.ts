import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  user: any;

  constructor() { }
  
  ngOnInit(){
    this.user=JSON.parse(localStorage.getItem('User')) || {'username':'UserName','email':'email@site.com'};
  }
	
}
