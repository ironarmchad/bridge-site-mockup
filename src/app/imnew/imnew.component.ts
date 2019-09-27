import {AfterViewInit, Component, Directive, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {faBullhorn, faCar, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-imnew',
  templateUrl: './imnew.component.html',
  styleUrls: ['./imnew.component.scss']
})
export class ImnewComponent implements OnInit, AfterViewInit {
  topOffset: string;
  height: string;
  @ViewChild('startBox', {static: true}) startBox: ElementRef;
  @ViewChild('startTitle', {static: true}) startTitle: ElementRef;
  @ViewChild('startVideo', {static: true}) startVideo: ElementRef;

  constructor(library: FaIconLibrary) {
    library.addIcons(faCar);
    library.addIcons(faBullhorn);
    library.addIcons(faPencilAlt);
  }

  setBackdrop() {
    const height = this.startTitle.nativeElement.offsetHeight;
    this.height = height + 'px';
    const maxHeight = Math.max(this.startTitle.nativeElement.offsetHeight, this.startVideo.nativeElement.offsetHeight);
    this.topOffset = `${Math.round(0.5 * (maxHeight - height))}px`;
    console.log(this.topOffset);
  }

  ngOnInit(): void {
    this.setBackdrop();
    console.log(`Init: ${this.topOffset}`);
  }

  ngAfterViewInit(): void {
    this.setBackdrop();
    console.log(`ViewInit: ${this.topOffset}`);
  }

  @HostListener('window:resize', ['$event'])
  resetTop() {
    this.setBackdrop();
  }
}
