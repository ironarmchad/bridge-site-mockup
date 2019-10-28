import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {NgbCarouselModule, NgbCollapseModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";

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
import { HowToConnectQuicklyComponent } from './how-to-connect-quickly/how-to-connect-quickly.component';
import { HalloweenComponent } from './home/halloween/halloween.component';
import { CoffeeComponent } from './home/coffee/coffee.component';
import { ServicesComponent } from './home/services/services.component';
import { BlankComponent } from './blank/blank.component';
import { PicCardComponent } from './staff-elders/pic-card/pic-card.component';
import { NeedPrayerComponent } from './need-prayer/need-prayer.component';
import { TellUsYourStoryComponent } from './tell-us-your-story/tell-us-your-story.component';

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
    HowToConnectQuicklyComponent,
    HalloweenComponent,
    CoffeeComponent,
    ServicesComponent,
    BlankComponent,
    PicCardComponent,
    NeedPrayerComponent,
    TellUsYourStoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbDropdownModule,
    FontAwesomeModule,
    NgbCollapseModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
