import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-how-to-connect-quickly',
  templateUrl: './how-to-connect-quickly.component.html',
  styleUrls: ['./how-to-connect-quickly.component.scss']
})
export class HowToConnectQuicklyComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
    document.body.style.backgroundImage = 'url(\'https://static.wixstatic.com/media/0aa35c7d24ae4076a37b2bf7f86873ab.jpg/v1/fill/w_1920,h_1280,al_c,q_85,usm_0.66_1.00_0.01/0aa35c7d24ae4076a37b2bf7f86873ab.webp\')';
  }

  ngOnDestroy(): void {
    document.body.style.backgroundImage = 'none';
  }

}
