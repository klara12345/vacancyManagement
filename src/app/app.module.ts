import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { PdfViewerModule} from "ng2-pdf-viewer";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import {HttpClientModule, HttpEventType} from "@angular/common/http";
import { CartPageComponent } from './home/cartPages/cart-page.component';
import { AddCandidateComponent } from './humanResource/candidate/cantidateTable/addCandidate/addCandidate.component';
import { CandidateTableComponent } from './humanResource/candidate/cantidateTable/candidateTable.component';
import { DialogComponent } from './humanResource/candidate/cantidateTable/deleteCandidate/dialog.component';
import { VacancyTableComponent } from './humanResource/vacancy/vacancyTable/vacancyTable.component';
import { AddVacancyComponent } from './humanResource/vacancy/vacancyTable/addVacancy/addVacancy.component';
import { BlacklistComponent } from './humanResource/blacklist/blacklist.component';
import { BlacklistFormComponent } from './humanResource/blacklist/blacklist-form/blacklist-form.component';
import {SharedModule} from "./shared/shared.module";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Add} from "./admin/user/add/add.component";
import {UserListComponent} from "./admin/user/userList/user-list.component";
import {AngularMaterialModule} from "./shared/angular-material.module";
import {ScheduleComponent} from "./humanResource/schedule/schedule.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule} from "@angular/forms";
import { InfoComponent } from './humanResource/candidate/cantidateTable/info/info.component';
import { ValidCandidateComponent } from './humanResource/candidate/cantidateTable/valid-candidate/valid-candidate.component';
import { MoveBlacklistComponent } from './teamLeader/candidate/move-blacklist/move-blacklist.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScheduleComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    CartPageComponent,
    AddCandidateComponent,
    CandidateTableComponent,
    DialogComponent,
    VacancyTableComponent,
    AddVacancyComponent,
    BlacklistComponent,
    BlacklistFormComponent,
    Add,
    UserListComponent,
    InfoComponent,
    ValidCandidateComponent,
    MoveBlacklistComponent
  ],
  entryComponents: [
    MoveBlacklistComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        AngularMaterialModule,
        PdfViewerModule,
        MatTooltipModule,
        FormsModule
    ],
  exports:[SharedModule,],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
