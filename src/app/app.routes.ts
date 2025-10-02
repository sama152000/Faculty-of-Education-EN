import { Routes } from '@angular/router';
import { FacultyOfEducationComponent } from './core/features/Faculty-of-education/Faculty-of-education.component';
import { HomeComponent } from './core/features/Faculty-of-education/Pages/Home/Home.component';
import { NewsEventsComponent } from './core/features/Faculty-of-education/Pages/news-events/news-events.component';
import { StaffMembersComponent } from './core/features/Faculty-of-education/Pages/about-us/staff-members/staff-members.component';
import { NewsEventsDetailsComponent } from './core/features/Faculty-of-education/Pages/shared/news-events-details/news-events-details.component';

export const routes: Routes = [

 {
    path: '',
    component: FacultyOfEducationComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: HomeComponent },
      {path:'about-us/staff-members', component : StaffMembersComponent},
      { path: 'news-events', component: NewsEventsComponent },
      {path :'news-events/:id', component : NewsEventsDetailsComponent},
      { path: 'units', component: HomeComponent },
      { path: 'labs/computer', component: HomeComponent },
      { path: 'labs/mental-health', component: HomeComponent },
      { path: 'labs/micro-teaching', component: HomeComponent },
      { path: 'labs/science', component: HomeComponent },
      { path: 'programs/new/mathematics-english', component: HomeComponent },
      { path: 'programs/new/biology-english', component: HomeComponent },
      { path: 'programs/new/physics-english', component: HomeComponent },
      { path: 'programs/new/chemistry-english', component: HomeComponent },
      { path: 'programs/academic/arabic', component: HomeComponent },
      { path: 'programs/academic/english', component: HomeComponent },
      { path: 'programs/academic/french', component: HomeComponent },
      { path: 'programs/academic/german', component: HomeComponent },
      { path: 'programs/academic/mathematics', component: HomeComponent },
      { path: 'programs/academic/chemistry', component: HomeComponent },
      { path: 'programs/academic/biology', component: HomeComponent },
      { path: 'administrations/student-affairs', component: HomeComponent },
      { path: 'administrations/postgraduate', component: HomeComponent },
      { path: 'administrations/hr', component: HomeComponent },
      { path: 'administrations/youth-welfare', component: HomeComponent },
      { path: 'administrations/labs', component: HomeComponent },
      { path: 'administrations/stores', component: HomeComponent },
      { path: 'departments/curricula-teaching', component: HomeComponent },
      { path: 'departments/foundations', component: HomeComponent },
      { path: 'departments/mental-health', component: HomeComponent },
      { path: 'departments/psychology', component: HomeComponent },
      { path: 'departments/comparative-education', component: HomeComponent },
      { path: 'management/dean', component: HomeComponent },
      { path: 'management/vice-dean-education', component: HomeComponent },
      { path: 'management/vice-dean-postgraduate', component: HomeComponent },
      { path: 'management/vice-dean-community', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

];
