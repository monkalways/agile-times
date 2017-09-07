import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/primeng';
import { Menu } from 'primeng/components/menu/menu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.menuItems = [
      { label: 'Dashboard', icon: 'fa-home', routerLink: ['/dashboard'] },
      { label: 'Settings', icon: 'fa-sliders', routerLink: ['/settings'] }
    ];
  }
  
}
