import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { UIChart } from "primeng/primeng";

const DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
  '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
  '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
  '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hoursByProject = [
    { id: 1, name: 'Payroll App', hoursSpent: 8 },
    { id: 2, name: 'Agile Times App', hoursSpent: 16 },
    { id: 3, name: 'Point of Sale App', hoursSpent: 24 },
  ];

  chartOptions = {
    title: {
      display: true,
      text: 'Hours By Project'
    },
    legend: {
      position: 'bottom'
    }
  };

  pieLabels: string[];
  pieData: number[];
  pieColors: string[];

  hoursByProjectChartData;
  hoursByTeamChartData;
  hoursByTeamChartDataMixed;
  
  constructor() { }

  ngOnInit() {
    this.pieLabels = this.hoursByProject.map( proj => proj.name );
    this.pieData = this.hoursByProject.map( proj => proj.hoursSpent );
    this.pieColors = this.configureDefaultColors(this.pieData);

    this.hoursByProjectChartData = {
      labels: this.pieLabels,
      datasets: [
        {
          data: this.pieData,
          backgroundColor: this.pieColors
        }
      ]
    };

    this.hoursByTeamChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Dev Team',
          backgroundColor: DEFAULT_COLORS[0],
          data: [65, 59, 80, 55, 67, 73]
        },
        {
          label: 'Ops Team',
          backgroundColor: DEFAULT_COLORS[1],
          data: [44, 63, 57, 90, 77, 70]
        }
      ]
    };

    this.hoursByTeamChartDataMixed = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Dev Team',
          type: 'bar',
          backgroundColor: DEFAULT_COLORS[0],
          data: [65, 59, 80, 55, 67, 73]
        },
        {
          label: 'Ops Team',
          type: 'line',
          backgroundColor: DEFAULT_COLORS[1],
          data: [44, 63, 57, 90, 77, 70]
        }
      ]
    };
  }

  onDataSelect(event) {
    let dataSetIndex = event.element._datasetIndex;
    let dataItemIndex = event.element._index;

    let labelClicked = this.hoursByTeamChartDataMixed.datasets[dataSetIndex].label;
    let valueClicked = this.hoursByTeamChartDataMixed.datasets[dataSetIndex].data[dataItemIndex];

    alert(`Looks like ${labelClicked} worked ${valueClicked} hours`);
  }

  private configureDefaultColors(data: number[]) : string[] {
    let customColors = [];
    if(data.length) {
      customColors = data.map( (element, idx) => {
        return DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
      })
    }
    return customColors;
  }

}
