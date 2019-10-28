import { Component, OnInit } from '@angular/core';
import {Email} from "../../_models/email";

@Component({
  selector: 'app-need-a-prayer',
  templateUrl: './need-a-prayer.component.html',
  styleUrls: ['./need-a-prayer.component.scss']
})
export class NeedAPrayerComponent implements OnInit {
  email: Email;

  constructor() { }

  ngOnInit() {
    this.email = new Email();
  }

}
