import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from '../_services/responsive.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMobile: boolean;
  isCollapsed: boolean;

  constructor(private respServ: ResponsiveService) {
    this.isCollapsed = false;
  }

  ngOnInit() {
    this.isMobile = this.respServ.currentMobileValue;
  }

  openMenu() {
    // close all other menus

    // open a list of links under list of links
  }

}
