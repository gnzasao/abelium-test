import { LoginComponent } from './login/login.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'detail/:id', component: PlayerDetailComponent },
  { path: 'activity', component: ActivityComponent},
  {path: 'login', component: LoginComponent , canActivate: [IsSignedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }