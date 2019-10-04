import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapse-link',
  templateUrl: './collapse-link.component.html',
  styleUrls: ['./collapse-link.component.scss']
})
export class CollapseLinkComponent implements OnInit {
  collapsed: boolean;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    this.collapsed = true;
  }

}
