import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from "../_services/responsive.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile: boolean;

  constructor(private respServ: ResponsiveService) { }

  ngOnInit() {
    this.isMobile = this.respServ.currentMobileValue;
  }
}
