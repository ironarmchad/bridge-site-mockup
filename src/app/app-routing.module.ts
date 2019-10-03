import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnnouncementsComponent} from './anouncements/announcements.component';
import {HomeComponent} from './home/home.component';
import {ImnewComponent} from './imnew/imnew.component';
import {WhatWeBelieveComponent} from './what-we-believe/what-we-believe.component';
import {StaffEldersComponent} from './staff-elders/staff-elders.component';
import {VideoComponent} from './video/video.component';
import {GodStoriesComponent} from './god-stories/god-stories.component';
import {CalendarComponent} from './calendar/calendar.component';
import {OutOfDomainComponent} from './out-of-domain/out-of-domain.component';


const routes: Routes = [
  {path: 'calender', component: CalendarComponent},
  {path: 'god-stories', component: GodStoriesComponent},
  {path: 'video', component: VideoComponent},
  {path: 'staff-elders', component: StaffEldersComponent},
  {path: 'what-we-believe', component: WhatWeBelieveComponent},
  {path: 'imnew', component: ImnewComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'out-of-domain', component: OutOfDomainComponent},
  {path: 'blog', redirectTo: 'out-of-domain'},
  {path: 'podcast', redirectTo: 'out-of-domain'},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
