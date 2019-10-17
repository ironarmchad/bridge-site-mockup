import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-connect-group-block',
  templateUrl: './connect-group-block.component.html',
  styleUrls: ['./connect-group-block.component.scss']
})
export class ConnectGroupBlockComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() btnLinkUrl: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
