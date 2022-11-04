import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LectureComponent } from './components/mental-body/lecture/lecture.component';
import { DietComponent } from './components/material-body/diet/diet.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [NavbarComponent, LectureComponent, DietComponent, UserListComponent],
  imports: [
    RouterModule,
    MaterialModule
  ],
  exports: [NavbarComponent],
})
export class CoreModule {}
