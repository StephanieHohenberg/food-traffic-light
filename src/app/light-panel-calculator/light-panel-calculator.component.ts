import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-light-panel-calculator',
  templateUrl: './light-panel-calculator.component.html',
  styleUrls: ['./light-panel-calculator.component.css']
})
export class LightPanelCalculatorComponent implements OnInit {

  @Input() public label: string;
  @Input() public limits: number[] = [];
  public color = 'primary';

  constructor() {
  }

  ngOnInit(): void {
  }

  public calculateColor(value) {
    this.color = 'grey';
    value = parseInt(value, 10);
    if (value < this.limits[0]) {
      this.color = 'green';
    } else if (value <= this.limits[1]) {
      this.color = 'orange';
    } else if (value > this.limits[1]) {
      this.color = 'red';
    }
  }
}
