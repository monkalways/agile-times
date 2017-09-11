import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/primeng";

declare var moment: any;

export enum PageNames {
  TimePage,
  ProjectPage,
  PlacePage,
  PeoplePage
}

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  private userTimeData = [
    { day: 'Monday', startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: 'Frontend' },
    { day: 'Tuesday', startTime: '9:00', endTime: '17:00', project: 'Payroll App', category: 'Backend' },
    { day: 'Wednesday', startTime: '9:00', endTime: '17:00', project: 'Point of Sale App', category: 'Operations' },
    { day: 'Thursday', startTime: '9:00', endTime: '17:00', project: 'Mobile App', category: 'Planning' },
    { day: 'Friday', startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: 'Requirements' }
  ];

  daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
  ];

  displayEditDialog = false;

  PageNames = PageNames;

  dialogPageIndex = PageNames.TimePage;

  dialogPages: MenuItem[] = [
    { label: 'Time' },
    { label: 'Project' },
    { label: 'Place' },
    { label: 'People' },
  ];

  private headerConfig = {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  };

  private events = [
    {
      title: 'Recent Work',
      start: moment().format(),
      end: moment().add(1, 'hour').format()
    }
  ]

  

  constructor() { }

  ngOnInit() {
  }

  getTimesForDay(day) {
    return this.userTimeData.filter(row => row.day == day);
  }

  day = 'Monday';
  dateAndMonth = moment().day(this.day).format("MMMM Do, YYYY");

  onChangeTabs(event) {
    let index = event.index;
    this.day = this.daysOfWeek[index];
    this.dateAndMonth = moment().day(this.day).format("MMMM Do, YYYY");
  }

  cancelDialog() {
    this.displayEditDialog = false;
  }

}
