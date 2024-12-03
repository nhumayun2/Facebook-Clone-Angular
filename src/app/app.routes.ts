import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { NewsfeedComponent } from './news-feed/newsfeed/newsfeed.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'newsfeed', component: NewsfeedComponent},
];
