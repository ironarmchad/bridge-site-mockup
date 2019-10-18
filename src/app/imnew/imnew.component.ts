import {Component, OnInit} from '@angular/core';
import {faBullhorn, faCar, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {ResponsiveService} from '../_services/responsive.service';


@Component({
  selector: 'app-imnew',
  templateUrl: './imnew.component.html',
  styleUrls: ['./imnew.component.scss']
})
export class ImnewComponent implements OnInit {
  isMobile: boolean;

  constructor(library: FaIconLibrary, private respServ: ResponsiveService) {
    library.addIcons(faCar);
    library.addIcons(faBullhorn);
    library.addIcons(faPencilAlt);
  }

  ngOnInit(): void {
    //document.body.style.backgroundImage = 'url(\'https://static.wixstatic.com/media/cbd73b_49f940374e7c46f9ba79ca7194171038~mv2.jpg/v1/fill/w_641,h_350,al_c,q_85/cbd73b_49f940374e7c46f9ba79ca7194171038~mv2.webp\')';
    document.body.style.backgroundImage = null;

    this.isMobile = this.respServ.currentMobileValue;
  }
}
