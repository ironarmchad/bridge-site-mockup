import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pic-card',
  templateUrl: './pic-card.component.html',
  styleUrls: ['./pic-card.component.scss']
})
export class PicCardComponent implements OnInit {
  @Input() picUrl: string;
  @Input() name: string;
  @Input() role: string;
  @Input() email: string;

  constructor() { }

  ngOnInit() {
  }

}
