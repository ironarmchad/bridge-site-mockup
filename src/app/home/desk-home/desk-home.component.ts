import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from "../../_services/responsive.service";

@Component({
  selector: 'app-desk-home',
  templateUrl: './desk-home.component.html',
  styleUrls: ['./desk-home.component.scss']
})
export class DeskHomeComponent implements OnInit {

  constructor(private respServ: ResponsiveService) { }

  ngOnInit() {
  }

}
