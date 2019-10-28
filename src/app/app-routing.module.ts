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
import {HowToConnectQuicklyComponent} from './how-to-connect-quickly/how-to-connect-quickly.component';
import {BlankComponent} from './blank/blank.component';
import {TellUsYourStoryComponent} from './tell-us-your-story/tell-us-your-story.component';
import {NeedPrayerComponent} from './need-prayer/need-prayer.component';


const routes: Routes = [
  {path: 'tell-us-your-story', component: TellUsYourStoryComponent},
  {path: 'need-prayer', component: NeedPrayerComponent},
  {path: 'how-to-connect-quickly', component: HowToConnectQuicklyComponent},
  {path: 'calender', component: CalendarComponent},
  {path: 'ministries', loadChildren: './ministries/ministries.module#MinistriesModule'},
  {path: 'god-stories', component: GodStoriesComponent},
  {path: 'video', component: VideoComponent},
  {path: 'podcast', redirectTo: 'out-of-domain'},
  {path: 'blog', redirectTo: 'out-of-domain'},
  {path: 'staff-elders', component: StaffEldersComponent},
  {path: 'what-we-believe', component: WhatWeBelieveComponent},
  {path: 'imnew', component: ImnewComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'out-of-domain', component: OutOfDomainComponent},
  {path: 'blank', component: BlankComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
