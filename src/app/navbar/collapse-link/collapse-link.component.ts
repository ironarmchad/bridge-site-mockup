import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-link',
  templateUrl: './collapse-link.component.html',
  styleUrls: ['./collapse-link.component.scss']
})
export class CollapseLinkComponent implements OnInit {
  collapsed: boolean;

  constructor() { }

  ngOnInit() {
    this.collapsed = true;
  }

}
