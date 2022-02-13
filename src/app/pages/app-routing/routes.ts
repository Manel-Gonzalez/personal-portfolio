import { Router, Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';


export const routes: Routes = [
    {path:'aboutme', component: AboutMeComponent},
    {path:'experience', component: ExperienceComponent},
    {path:'education', component: EducationComponent},
    {path:'skills', component: SkillsComponent},
    {path:'', redirectTo: '/aboutme', pathMatch:'full'}
]