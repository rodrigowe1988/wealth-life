import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LectureComponent } from './components/mental-body/lecture/lecture.component';
import { DietComponent } from './components/material-body/diet/diet.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ExercisesRoutineComponent } from './components/material-body/exercises-routine/exercises-routine.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [NavbarComponent, LectureComponent, DietComponent, UserListComponent, ExercisesRoutineComponent, ProfileComponent, LoginComponent, HomeComponent, FormsComponent],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  exports: [NavbarComponent],
})
export class CoreModule {}
