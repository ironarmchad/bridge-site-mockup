import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from '../_services/responsive.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  isMobile: boolean;

  constructor(private respServ: ResponsiveService) { }

  ngOnInit() {
    this.isMobile = this.respServ.currentMobileValue;
  }

}
