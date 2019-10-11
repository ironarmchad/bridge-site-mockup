import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-connect-groups',
  templateUrl: './connect-groups.component.html',
  styleUrls: ['./connect-groups.component.scss']
})
export class ConnectGroupsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    document.body.style.backgroundImage = 'url(\'https://static.wixstatic.com/media/9a7a0c1c4b319122d9372e2ab542405a.' +
      'jpg/v1/fill/w_800,h_516,al_c,q_85/9a7a0c1c4b319122d9372e2ab542405a.webp\')';
  }
}
