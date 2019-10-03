import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {NgbCollapseModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AnnouncementsComponent} from './anouncements/announcements.component';
import {HomeComponent} from './home/home.component';
import {ImnewComponent} from './imnew/imnew.component';
import {WhatWeBelieveComponent} from './what-we-believe/what-we-believe.component';
import {StaffEldersComponent} from './staff-elders/staff-elders.component';
import {VideoComponent} from './video/video.component';
import {GodStoriesComponent} from './god-stories/god-stories.component';
import {CalendarComponent} from './calendar/calendar.component';
import { OutOfDomainComponent } from './out-of-domain/out-of-domain.component';
import { PostComponent } from './anouncements/post/post.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CollapseLinkComponent } from './navbar/collapse-link/collapse-link.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    HomeComponent,
    ImnewComponent,
    WhatWeBelieveComponent,
    StaffEldersComponent,
    VideoComponent,
    GodStoriesComponent,
    CalendarComponent,
    OutOfDomainComponent,
    PostComponent,
    NavbarComponent,
    FooterComponent,
    CollapseLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    FontAwesomeModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
