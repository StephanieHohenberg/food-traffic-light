import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NutritionEntry, NUTRITIONS} from './models/nutritions-bible.model';
import {MeasurementInput, UNITS} from './models/measurement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nutritions: NutritionEntry[] = NUTRITIONS;
  public measurementInput: MeasurementInput = {value: 100, unit: UNITS[0]};

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public getLimitsByMeasurementInput(nutritionEntry: NutritionEntry): number[] {
    let limits;
    if (this.measurementInput.unit.isWeight) {
      limits = nutritionEntry.limitsG;
    } else {
      const isML = this.measurementInput.unit.value === 'ml';
      limits = isML ? nutritionEntry.limitsML : nutritionEntry.limitsML.map(l => l * 1000);
    }

    if (this.measurementInput.value < 100) {
      limits = limits.map(l => l / (100 / this.measurementInput.value));
    } else if (this.measurementInput.value > 100) {
      limits = limits.map(l => l * (this.measurementInput.value / 100));
    }
    return limits;
  }
}
