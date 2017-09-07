import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  @Input() label: string;
  @Input() value: number;
  @Input() icon: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
