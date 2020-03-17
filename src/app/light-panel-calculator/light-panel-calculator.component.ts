import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-light-panel-calculator',
  templateUrl: './light-panel-calculator.component.html',
  styleUrls: ['./light-panel-calculator.component.css']
})
export class LightPanelCalculatorComponent implements OnInit {

  @Input() public label: string;
  @Input() public limits: number[] = [];
  public inputValue = -1;

  constructor() {
  }

  ngOnInit(): void {
  }

  public onInput(value): void {
    this.inputValue = parseInt(value, 10);
  }

  public calculateColor(): string {
    if (this.inputValue < 0) {
      return 'grey';
    } else if (this.inputValue < this.limits[0]) {
      return 'green';
    } else if (this.inputValue <= this.limits[1]) {
      return 'orange';
    } else if (this.inputValue > this.limits[1]) {
      return 'red';
    }
    return 'grey';
  }
}
