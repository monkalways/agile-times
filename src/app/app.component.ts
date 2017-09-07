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
  miniMenuItems: MenuItem[];

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.menuItems = [
      { label: 'Dashboard', icon: 'fa-home', routerLink: ['/dashboard'] },
      { label: 'Settings', icon: 'fa-sliders', routerLink: ['/settings'] }
    ];
    this.miniMenuItems = [];
    this.menuItems.forEach( (item : MenuItem) => {
      let miniItem = { icon: item.icon, routerLink: item.routerLink }
      this.miniMenuItems.push(miniItem);
    })
  }

  // selectInitialMenuItemBasedOnUrl() {
  //   let path = document.location.pathname;
  //   let menuItem = this.menuItems.find( (item) => { return item.routerLink[0] == path });
  //   if (menuItem) {
  //     let selectedIcon = this.bigMenu.container.querySelector(`.${menuItem.icon}`);
  //     jQuery(selectedIcon).closest('li').addClass('menu-selected');
  //   }
  // }

  // ngAfterViewInit() {
  //   this.selectInitialMenuItemBasedOnUrl();
  // }
  
}
