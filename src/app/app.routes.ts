import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { NewsfeedComponent } from './news-feed/newsfeed/newsfeed.component';
import { ProfileComponent } from './profile/profile.component';
import { VideosComponent } from './videos/videos.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { GroupsComponent } from './groups/groups.component';
import { GamesComponent } from './games/games.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'newsfeed', component: NewsfeedComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'videos', component: VideosComponent},
    {path: 'marketPlace', component: MarketPlaceComponent},
    {path: 'group', component: GroupsComponent},
    {path: 'gaming', component: GamesComponent},
];
