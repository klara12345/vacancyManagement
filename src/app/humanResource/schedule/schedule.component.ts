import { Component, OnInit, ViewChild } from '@angular/core';
import { scheduleData} from "../../models/schedule";
import {
  ActionEventArgs,
  AgendaService,
  DayService, EventSettingsModel,
  MonthAgendaService,
  MonthService, TimelineMonthService, TimelineViewsService, View,
  WeekService,
  WorkWeekService
} from "@syncfusion/ej2-angular-schedule";
import {defaultData} from "../../models/schedule";
import {DataManager, UrlAdaptor, WebApiAdaptor} from "@syncfusion/ej2-data";

@Component({
  selector: 'app-schedule',
  template:'<ejs-schedule></ejs-schedule>',
  // templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class ScheduleComponent implements OnInit {
  @ViewChild("scheduleObj")

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  private workHours: any;
  private scheduleObj: any;
  public onActionBegin(args: ActionEventArgs): void {
    if (args.requestType == 'eventChange') {
      const weekEnds: number[] = [0, 6];
      const data: { [key: string]: Object } = args.data as { [key: string]: Object };
      const weekDay: boolean = weekEnds.indexOf((data['StartTime'] as Date).getDay()) >= 0;
      const workHours: boolean = ((parseInt(this.scheduleObj.workHours.start.toString().slice(0, 2), 10) <= (data['StartTime'] as Date).getHours()) && (parseInt(this.scheduleObj.workHours.end.toString().slice(0, 2), 10)) >= (data['StartTime'] as Date).getHours());
      if (weekDay || !workHours) {
        args.cancel = true;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
