import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinistriesRoutingModule } from './ministries-routing.module';
import { MissionsComponent } from './missions/missions.component';
import { MenComponent } from './men/men.component';
import { WomensComponent } from './womens/womens.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { ChildrensComponent } from './childrens/childrens.component';
import { ConnectGroupsComponent } from './connect-groups/connect-groups.component';
import { DiscipleshipComponent } from './discipleship/discipleship.component';
import { FellowshipComponent } from './fellowship/fellowship.component';
import { OutreachComponent } from './outreach/outreach.component';
import { PrayerComponent } from './prayer/prayer.component';
import { SupportComponent } from './support/support.component';
import { WorshipComponent } from './worship/worship.component';


@NgModule({
  declarations: [MissionsComponent, MenComponent, WomensComponent, CollegeComponent, StudentComponent, ChildrensComponent, ConnectGroupsComponent, DiscipleshipComponent, FellowshipComponent, OutreachComponent, PrayerComponent, SupportComponent, WorshipComponent],
  imports: [
    CommonModule,
    MinistriesRoutingModule
  ]
})
export class MinistriesModule { }
