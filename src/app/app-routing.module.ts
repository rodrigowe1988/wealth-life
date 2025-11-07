import { InvestimentsComponent } from './core/components/investiments/investiments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorNotFoundComponent } from './core/components/error-not-found/error-not-found.component';
import { FormsComponent } from './core/components/forms/forms.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { DietComponent } from './core/components/material-body/diet/diet.component';
import { ExercisesRoutineComponent } from './core/components/material-body/exercises-routine/exercises-routine.component';
import { LectureComponent } from './core/components/mental-body/lecture/lecture.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { UserListComponent } from './core/components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'exercises', component: ExercisesRoutineComponent },
  { path: 'diet', component: DietComponent },
  { path: 'lecture', component: LectureComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'investiments', component: InvestimentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forms', component: FormsComponent },
  { path: '**', component: ErrorNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
