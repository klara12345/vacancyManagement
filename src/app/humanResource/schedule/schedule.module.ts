import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScheduleComponent} from "./schedule.component";
import {ScheduleAllModule} from "@syncfusion/ej2-angular-schedule";


@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    ScheduleAllModule,

  ]
})
export class ScheduleModule { }
