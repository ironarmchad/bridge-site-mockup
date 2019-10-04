import {Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from "../../_services/responsive.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() internalLink: string;
  @Input() externalLink: string;
  @Input() buttonText: string;
  isMobile: boolean;

  constructor(private respServ: ResponsiveService) { }

  ngOnInit() {
    this.isMobile = this.respServ.currentMobileValue;
  }
}
