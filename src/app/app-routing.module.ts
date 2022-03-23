import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from "./navbar/navbar.component";
import {LoginComponent} from "./login/login.component";
import {ScheduleComponent} from "./humanResource/schedule/schedule.component";
import {AddCandidateComponent} from "./humanResource/candidate/cantidateTable/addCandidate/addCandidate.component";
import {CandidateTableComponent} from "./humanResource/candidate/cantidateTable/candidateTable.component";
import {VacancyTableComponent} from "./humanResource/vacancy/vacancyTable/vacancyTable.component";
import {AddVacancyComponent} from "./humanResource/vacancy/vacancyTable/addVacancy/addVacancy.component";
import {Add} from "./admin/user/add/add.component";
import {UserListComponent} from "./admin/user/userList/user-list.component";
import {BlacklistComponent} from "./humanResource/blacklist/blacklist.component";

import {SearchPipe} from "./humanResource/candidate/cantidateTable/filter.pipe";
import {LoginGuard} from "./login/login.guard";
import {RoleGuard} from "./login/role.guard";
import {
  ValidCandidateComponent
} from "./humanResource/candidate/cantidateTable/valid-candidate/valid-candidate.component";



const routes: Routes = [
  {path: '', component: LoginComponent },
  {
    path: 'hr', component: NavbarComponent, canActivate: [LoginGuard,RoleGuard], children: [
      {path: 'schedule', component: ScheduleComponent, canActivate: [LoginGuard]},
      {path: 'candidates', component: CandidateTableComponent,canActivate: [LoginGuard]},
      {path: 'valid', component: ValidCandidateComponent,canActivate: [LoginGuard]},
      {path: 'vacancies', component: VacancyTableComponent, canActivate: [LoginGuard]},
      {path: 'candidates/add', component: AddCandidateComponent, canActivate: [LoginGuard]},
      {path: 'candidates/add/:id', component: AddCandidateComponent, canActivate: [LoginGuard]},
      {path: 'vacancies/add/:id', component: AddVacancyComponent, canActivate: [LoginGuard]},
      {path: 'vacancies/add', component: AddVacancyComponent, canActivate: [LoginGuard]},
      {path: 'black-list', component: BlacklistComponent, canActivate: [LoginGuard]},
    ], data: { idRole : '1'}
  },
  {path: 'login', component: LoginComponent},

  {
    path: 'user', component: NavbarComponent, canActivate: [LoginGuard, RoleGuard], children:[
      {path: 'add', component: Add , canActivate: [LoginGuard]},
      {path: 'list', component: UserListComponent, canActivate: [LoginGuard]}
      ], data : {idRole: '3'}
  },
  {path: 'tl', component : NavbarComponent, canActivate: [LoginGuard, RoleGuard], children: [
      {path: 'candidates', component: CandidateTableComponent},
    ],data : {idRole: '2'}
  },

  ];


@NgModule({
    declarations: [
        SearchPipe
    ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
    exports: [RouterModule, SearchPipe],
})
export class AppRoutingModule { }
