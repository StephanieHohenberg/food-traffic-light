import {Component, Input, OnInit} from '@angular/core';
import {NutritionEntry} from '../models/nutritions-bible.model';
import {MeasurementInput} from '../models/measurement.model';

@Component({
  selector: 'app-light-panel-calculator',
  templateUrl: './light-panel-calculator.component.html',
  styleUrls: ['./light-panel-calculator.component.css']
})
export class LightPanelCalculatorComponent implements OnInit {

  @Input() nutritionEntry: NutritionEntry;
  @Input() measureInput: MeasurementInput;

  constructor() {
  }

  ngOnInit(): void {
  }

}
