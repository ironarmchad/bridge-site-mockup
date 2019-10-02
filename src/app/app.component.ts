import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from './_services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMobile: boolean;

  constructor(private respServ: ResponsiveService) {
  }

  ngOnInit(): void {
    this.onResize();
    this.respServ.checkWidth();
  }

  onResize() {
    this.respServ.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }


}
