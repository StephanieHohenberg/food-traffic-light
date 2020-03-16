import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MeasurementInput, Unit, UNITS} from '../models/measurement.model';

@Component({
  selector: 'app-measure-input',
  templateUrl: './measure-input.component.html',
  styleUrls: ['./measure-input.component.css']
})
export class MeasureInputComponent implements OnInit {

  @Output() public measureInputChanged = new EventEmitter<MeasurementInput>();
  public unitControl = new FormControl('', Validators.required);
  public units: Unit[] = UNITS;
  public selectedUnit;
  public inputValue = 100; // TODO: restrict input field on numbers only
  constructor() {
  }

  public ngOnInit(): void {
    this.selectedUnit = this.units[0];
  }

  public emitChanges(): void {
    this.measureInputChanged.emit({value: this.inputValue, unit: this.selectedUnit.value});
  }

}
