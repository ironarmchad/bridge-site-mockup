import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from "../../_services/responsive.service";

@Component({
  selector: 'app-halloween',
  templateUrl: './halloween.component.html',
  styleUrls: ['./halloween.component.scss']
})
export class HalloweenComponent implements OnInit {
  isMobile: boolean;

  constructor(
    private respServ: ResponsiveService
  ) { }

  ngOnInit() {
    this.isMobile = this.respServ.currentMobileValue;
  }

}
