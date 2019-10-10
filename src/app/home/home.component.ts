import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from '../_services/responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile: boolean;

  constructor(private respServ: ResponsiveService) { }

  ngOnInit() {
    document.body.style.backgroundImage = "url('https://static.wixstatic.com/media/83f45f9f8cea462b8562f4dac5ed1fcb.jpg/v1/fill/w_1920,h_1280,al_c,q_85,usm_0.66_1.00_0.01/83f45f9f8cea462b8562f4dac5ed1fcb.webp')";
    this.isMobile = this.respServ.currentMobileValue;
  }
}
