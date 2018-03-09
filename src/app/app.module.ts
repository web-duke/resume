import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResponsiveModule } from 'ng2-responsive';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsItemComponent } from './skills/skills-item/skills-item.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SkillsComponent,
    SkillsItemComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    ResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SkillsItemComponent
  ]
})
export class AppModule { }
