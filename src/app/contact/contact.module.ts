import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedAPrayerComponent } from './need-a-prayer/need-a-prayer.component';
import { YourStoryComponent } from './your-story/your-story.component';



@NgModule({
  declarations: [NeedAPrayerComponent, YourStoryComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
