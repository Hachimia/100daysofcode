import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MessagesComponent } from './messages/messages.component';
import { BlogComponent } from './blog/blog.component';
import { ProvidersComponent } from './providers/providers.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: WelcomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'providers', component: ProvidersComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
