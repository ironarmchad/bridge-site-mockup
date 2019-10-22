import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MissionsComponent} from './missions/missions.component';
import {MenComponent} from './men/men.component';
import {WomensComponent} from './womens/womens.component';
import {CollegeComponent} from './college/college.component';
import {StudentComponent} from './student/student.component';
import {ChildrensComponent} from './childrens/childrens.component';
import {ConnectGroupsComponent} from './connect-groups/connect-groups.component';
import {DiscipleshipComponent} from './discipleship/discipleship.component';
import {FellowshipComponent} from './fellowship/fellowship.component';
import {OutreachComponent} from './outreach/outreach.component';
import {PrayerComponent} from './prayer/prayer.component';
import {SupportComponent} from './support/support.component';
import {WorshipComponent} from './worship/worship.component';


const routes: Routes = [
  {path: 'missions', component: MissionsComponent},
  {path: 'mens', component: MenComponent},
  {path: 'womens', component: WomensComponent},
  {path: 'college', component: CollegeComponent},
  {path: 'student', component: StudentComponent},
  {path: 'childrens', component: ChildrensComponent},
  {path: 'connect-groups', component: ConnectGroupsComponent},
  {path: 'discipleship', component: DiscipleshipComponent},
  {path: 'fellowship', component: FellowshipComponent},
  {path: 'outreach', component: OutreachComponent},
  {path: 'prayer', component: PrayerComponent},
  {path: 'support', component: SupportComponent},
  {path: 'worship', component: WorshipComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinistriesRoutingModule { }
