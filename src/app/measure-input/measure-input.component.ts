import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MeasurementInput, Unit, UNITS} from '../models/measurement.model';

@Component({
  selector: 'app-measure-input',
  templateUrl: './measure-input.component.html',
  styleUrls: ['./measure-input.component.css']
})
export class MeasureInputComponent implements OnInit {

  @Output() public measureInputChanged = new EventEmitter<MeasurementInput>();
  @Input()
  public inputValue;
  @Input()
  public selectedUnit;
  public unitControl = new FormControl('', Validators.required);
  public units: Unit[] = UNITS;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public emitChanges(): void {
    this.measureInputChanged.emit({value: this.inputValue, unit: this.selectedUnit});
  }

}
