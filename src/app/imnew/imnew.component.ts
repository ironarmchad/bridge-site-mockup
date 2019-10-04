import {AfterViewInit, Component, Directive, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
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
    this.isMobile = this.respServ.currentMobileValue;
  }
}
