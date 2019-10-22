import {Component, OnInit} from '@angular/core';
import {Email} from '../_models/email';

@Component({
  selector: 'app-need-prayer',
  templateUrl: './need-prayer.component.html',
  styleUrls: ['./need-prayer.component.scss']
})
export class NeedPrayerComponent implements OnInit {
  email: Email;
  staff = false;
  prayerGroup = false;
  prayerChain = false;

  constructor() {
  }

  ngOnInit() {
    this.email = new Email();
  }

  onSubmit() {
    if (this.staff) {
      this.email.toWhom.push('staff.member@bridge.church');
    }

    if (this.prayerGroup) {
      this.email.toWhom.push('some.one@some.where');
    }

    if (this.prayerChain) {
      this.email.toWhom.push('other.person@else.where');
    }

    alert(`you have sent this JSON into the nether-reaches of the interwebs as this feature isn't complete:
    \n${JSON.stringify(this.email)}`);
  }

}
