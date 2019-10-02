import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AnouncementsComponent} from './anouncements/anouncements.component';
import {HomeComponent} from './home/home.component';
import {ImnewComponent} from './imnew/imnew.component';
import {WhatWeBelieveComponent} from './what-we-believe/what-we-believe.component';
import {StaffEldersComponent} from './staff-elders/staff-elders.component';
import {VideoComponent} from './video/video.component';
import {GodStoriesComponent} from './god-stories/god-stories.component';
import {CalendarComponent} from './calendar/calendar.component';
import { OutOfDomainComponent } from './out-of-domain/out-of-domain.component';
import { PostComponent } from './anouncements/post/post.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DeskHomeComponent } from './home/desk-home/desk-home.component';
import { MobileHomeComponent } from './home/mobile-home/mobile-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnouncementsComponent,
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
    DeskHomeComponent,
    MobileHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
