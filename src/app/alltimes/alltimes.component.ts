import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/primeng";

@Component({
  selector: 'app-alltimes',
  templateUrl: './alltimes.component.html',
  styleUrls: ['./alltimes.component.css']
})
export class AlltimesComponent implements OnInit {

  allTimesheetData = [
    { user: 'Glen', project: 'Payroll App', category: 'Backend', startTime: 1000, endTime: 1700, date: 1434243 },
    { user: 'Karen', project: 'Agile Times', category: 'Frontend', startTime: 900, endTime: 1700, date: 1434243 },
    { user: 'Si', project: 'Mobile App', category: 'Operations', startTime: 1100, endTime: 1700, date: 1434243 },
    { user: 'Rohit', project: 'Agile Times', category: 'Backend', startTime: 800, endTime: 1700, date: 1434243 },
  ];

  allProjectsNames = ['', 'Payroll App', 'Agile Times', 'Mobile App'];

  allProjects;

  selectedRow;

  contextMenu: MenuItem[];

  recordCount: number;

  constructor() { 
    for(let x = 0; x < 5; x++) {
      this.allTimesheetData = this.allTimesheetData.concat(this.allTimesheetData);
    }

    this.recordCount = this.allTimesheetData.length;
  }

  ngOnInit() {
    this.allProjects = this.allProjectsNames.map( proj => {return { label: proj, value: proj};} );

    this.contextMenu = [
      { label: 'Debug', icon: 'fa-bug', command: event => this.onDebug(this.selectedRow) },
      { label: 'Delete', icon: 'fa-close', command: event => this.onDelete(this.selectedRow) },
    ]
  }

  onEditComplete(editInfo) {
    let fieldChanged = editInfo.column.field;
    let newRowValues = editInfo.data;
    alert(`You edited ${fieldChanged} to ${newRowValues[fieldChanged]}`);
  }

  onRowSelect(rowInfo) {
    // alert(JSON.stringify(rowInfo.data));
  }

  onDebug(selectedRow) {
    console.log(JSON.stringify(selectedRow))
  }

  onDelete(selectedRow) {
    // this.allTimesheetData = this.allTimesheetData.filter( row => selectedRow.include(row) );
  }

}
