import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResponsiveModule } from 'ng2-responsive';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsItemComponent } from './skills/skills-item/skills-item.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WorkExperienceItemComponent } from './work-experience/work-experience-item/work-experience-item.component';
import { TechnicalEnvironmentComponent } from './technical-environment/technical-environment.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SkillsComponent,
    SkillsItemComponent,
    WorkExperienceComponent,
    WorkExperienceItemComponent,
    TechnicalEnvironmentComponent,
    EducationComponent
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
