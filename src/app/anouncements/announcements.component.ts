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
    document.body.style.backgroundImage = "url('https://static.wixstatic.com/media/980a156ff63d4ed993ae99f908fc418f.jpg/v1/fill/w_1920,h_1440,al_c,q_85,usm_0.66_1.00_0.01/980a156ff63d4ed993ae99f908fc418f.webp')";
    this.isMobile = this.respServ.currentMobileValue;
  }

}
