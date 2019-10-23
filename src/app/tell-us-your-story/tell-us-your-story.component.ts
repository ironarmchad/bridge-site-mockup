import {Component, OnInit} from '@angular/core';
import {Email} from '../_models/email';

@Component({
  selector: 'app-tell-us-your-story',
  templateUrl: './tell-us-your-story.component.html',
  styleUrls: ['./tell-us-your-story.component.scss']
})
export class TellUsYourStoryComponent implements OnInit {
  email = new Email();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    alert(`you have sent this JSON into the nether-reaches of the interwebs as this feature isn't complete
    \n${JSON.stringify(this.email)}`);
  }

}
