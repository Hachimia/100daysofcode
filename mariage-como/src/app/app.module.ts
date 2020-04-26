import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistrationComponent } from './registration/registration.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProvidersComponent } from './providers/providers.component';
import { MessagesComponent } from './messages/messages.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventFormComponent } from './event-form/event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UsersComponent,
    DashboardComponent,
    RegistrationComponent,
    CalendarComponent,
    ProvidersComponent,
    MessagesComponent,
    BlogComponent,
    ProfileComponent,
    ArticlesComponent,
    ArticleItemComponent,
    EventItemComponent,
    EventFormComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
